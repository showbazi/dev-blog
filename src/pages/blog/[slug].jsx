import connectDB from "database/connectDB";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote} from 'next-mdx-remote';
import Blog from "database/models/blogModel";
import React from "react";

const BlogPage = () => {
    return <div>BlogPage</div>
}

export  const getStaticProps = async (req, res) => {
    await connectDB();

    // capturing the slug from params
    const {slug} = req.params;

    const projection = {
        _id: 0,
        _v: 0,
    }

    // filtering through the slug from the params and projectioning the results wxcluding the "_id" and "_v"
    const result = await Blog.findOne({slug}, projection);

    // capturing the content, createdAt and other properties of result object but before doing that we are coverting the mongoose object(i.e. result) to normal object
    const {content, createdAt, ...blog} = result.toObject();

    const mdxSouurce = await serialize(content);

    console.log(content);

    return {
        props: {},
    }
}

export  const getStaticPaths = async () => {
    await connectDB();

    // we will only get the array of slugs from Blog Model
    const slugs = await Blog.find({}, 'slug');

    // 
    const paths = slugs.map((item) => ({
        params: {
            slug: item.slug,
        }
    }))

    return {
        paths,
        fallback: false,
    }
}


export default BlogPage;