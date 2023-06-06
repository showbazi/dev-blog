import connectDB from 'database/connectDB';
import BlogModel from 'database/models/blogModel';

const viewHandler = async (req, res) => {
  const {
    method,
    query: { customID },
  } = req;

  const errMessage = 'Error has occured';

  try {
    await connectDB();

    if (method === 'POST') {
      const updateViews = await BlogModel.updateOne(
        { customID },
        {
          $inc: {
            totalViews: 1,
          },
        }
      );

      // modifiedCount will indicate the number of documents that were modified
      if (updateViews.modifiedCount) {
        return res.status(200).json({
          success: true,
        });
      }
      // if modifiedCount is 0 then we will return an error with the message
      return res.status(400).send({ errMessage });
    }

    //  if the method is not POST then I am assuming it will be GET so in that case
    const blog = await BlogModel.findOne({ customID }, 'totalViews');

    if (!blog) {
      return res.status(400).send({ errMessage });
    }

    return res.status(200).json({
      success: true,
      totalViews: blog.totalViews,
    });
  } catch (err) {
    return res.status(400).send({ errMessage });
  }
};

export default viewHandler;
