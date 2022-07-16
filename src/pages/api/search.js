import connectDB from 'database/connectDB';
import blogModel from 'database/models/blogModel';

const handleSearch = async (req, res) => {
    const {method, query: { query }} = req;

    const errMessage = "Error has occured";

    try {
        await connectDB();

        if(method !== "GET") return res.status(400).json({errMessage});

        // we will run mongodb aggreagation pipeline
        // it will be an array of objects
        const agg = [
            {
                // first stage of pipeline ----- search
                $search : {
                    autocomplete: {
                        // query property that we get from req
                        query,
                        // specifying a path were we search i.e. here we are searching on the "title" field
                        path: "title",
                        // on enabling the fuzzy finding and if mispell on the input then the mongoDB will still try to give the accurate result
                        fuzzy: {
                            maxEdits: 2,
                            prefixLength: 1,
                            maxExpansions: 256,
                        }
                    }
                }
            },
            {
                // second stage of pipeline ------ limiting the results we get from search query
                $limit : 10 //limitig the result to 10 only
            },
            {
                // third stage of pipeline ------- excluding the fields from the documents we recieve after first and second stage by doing projection
                $project: {
                    _id: 0,
                    banner: 0,
                    content: 0,
                    altText: 0,
                },
            },
        ]

        // now passing the array of aggregation i.e. "agg" to the aggreagte function on the blogModel
        const blogs = await blogModel.aggregate(agg);

        // sending the array of blogs with title, createdAt, slug, totalViews, description, readingTime
        return res.status(200).send(blogs);

    } catch (err) {
        return res.status(400).send({errMessage});
    }
}

export default handleSearch;