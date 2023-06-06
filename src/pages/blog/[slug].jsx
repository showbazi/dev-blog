import connectDB from "database/connectDB";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Blog from "database/models/blogModel";
import React from "react";
import BlogHeader from "components/Blog/BlogHeader";
import styled from "styled-components";
import MdxComponents from "components/MDX Styles/MdxComponents";
import { device } from "utils/ResponsiveBreakpoints";

const BlogContainer = styled.div`
  /* width: 95%; */
  /* padding-inline: 2rem; */
  /* margin: auto;
  padding-inline: 11rem; */
  flex: 1 1 686px;
  max-width: min(686px, 100%);

  @media ${device.tablet} {
    /* padding-inline: 0; */
    /* width: 68%;      */
  }
`;

const MdxContainer = styled.div`
  padding-top: 2.5rem;
  /* padding-inline: 1rem; */
`;

const BlogPage = ({ mdxSource, blogData }) => {
  return (
    <BlogContainer>
      <BlogHeader {...blogData} />
      <MdxContainer>
        <MDXRemote {...mdxSource} components={MdxComponents} />
      </MdxContainer>
    </BlogContainer>
  );
};

// here we are fetching the blog data using the slug
export const getStaticProps = async (req, res) => {
  await connectDB();

  // capturing the slug from params
  const { slug } = req.params;

  const projection = {
    _id: 0,
    _v: 0,
  };

  // filtering through the slug from the params and projectioning the results excluding the "_id" and "_v"
  const result = await Blog.findOne({ slug }, projection);

  // capturing the content, createdAt and other properties of result object but before doing that we are coverting the mongoose object(i.e. result) to normal object
  const { content, createdAt, ...blogData } = result.toObject();

  // we need to convert the markdown to html so that we can render it in browser
  // here we are serializing the content
  const mdxSource = await serialize(content);

  blogData.createdAt = createdAt.toDateString();

  return {
    props: { mdxSource, blogData },
  };
};

export const getStaticPaths = async () => {
  await connectDB();

  // we will only get the array of slugs from Blog Model
  const slugs = await Blog.find({}, "slug");

  //
  const paths = slugs.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));
  
  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;
