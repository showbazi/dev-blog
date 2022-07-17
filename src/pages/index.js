import Head from "next/head";
import matter from "gray-matter";
import readingTime from "reading-time";

// import styles from '../../styles/Home.module.css';
import BlogPreviewList from "components/Blog/BlogPreviewList";
import connectDB from "database/connectDB";
import Blog from "database/models/blogModel";

import getFileNames from "utils/getFileNames";
import readBlogFiles from "utils/readBlogFiles";
import styled from "styled-components";

// ---------------------styles----------------------------
const HomePageContainer = styled.div`
  display: grid;
  /* grid-template-columns: ; */
`;

// ---------------------styles----------------------------

const Home = ({ topBlogs, latestBlogs, theme }) => {
  // console.log("top blogs", topBlogs);
  // console.log("latest blogs", latestBlogs);

  return (
    <HomePageContainer>
      <Head>
        <title>Showbazi Blog</title>
      </Head>

      <BlogPreviewList heading="top blogs" blogs={topBlogs} theme={theme} />

      <BlogPreviewList
        heading="latest blogs"
        blogs={latestBlogs}
        theme={theme}
      />
    </HomePageContainer>
  );
};

export default Home;

// ------------backend part where we are getting the data statically-------------------

export const getStaticProps = async () => {
  // connecting the database with the server
  await connectDB();

  const fileNames = getFileNames();
  // here in fileNames we are getting the array of the name of mdx files that are present in blogs folder

  const allParsedData = fileNames.map((fileName) => {
    // here we are removing the .mdx extension from all the names that are present in the array of fileName
    // and here the slug is the dynamic part of the url where we are using the blog filenames as  dynamic url path that comes after blogs
    const slug = fileName.replace(".mdx", "");

    // here we are getting the whole content (i.e. data + content) from the mdx
    const parsedFile = readBlogFiles(fileName);

    // here by using matter (i.e. gray matter library) we can get the data and content of mdx seperately
    const { data, content } = matter(parsedFile);

    data.readingTime = readingTime(content).text;
    data.slug = slug;
    data.content = content;

    // console.log("data", data);
    // console.log("content", content);
    return data;
  });

  // whenever we add a new mdx file the server will run this code as a result it will add all the files again (example:- suppose we have aleady 10 files in MongoDB and on adding 1 file then the server will add 11 files to it i.e. now there will be 21 files(10 previous + 11 now) in mongoDB  so to prevent it we only need to update the 1 file that is added so that on the server it will be 11 files(10 previous + 1 new) )
  const blogBulkUpdateArray = allParsedData.map((blog) => ({
    updateOne: {
      // we need to update one document only
      filter: { customID: blog.customID }, // we filter the file that needs to be updated (here it is done by checking customID of blog)
      update: {
        //after finding the blog we will update it with the things that are specified in update
        $set: blog, //we are updating the whole blog
      },
      upsert: true, // when set to "true" it will check if there is no blog with the customID on mongoDb database it will create a new blog
      setDefaultOnInsert: true, // this will add the default properties to the document
    },
  }));

  // we are updating the blogs on bulk by using bulkWrite method on the Blog model
  await Blog.bulkWrite(blogBulkUpdateArray);

  // projection is used in find method to include or exclude the fields that you want to get(for including "1" and excluding "0" is used)
  const projection = {
    _id: 0,
    _v: 0,
    content: 0,
  };

  // to limit the number of posts we are fetching from the database
  const limit = 10;

  // here find method will give us the array of top blogs on basis of totalViews
  // sort is used to sort the result on the basis of specified field and to sort on decreasing order we use negative sign before the field
  const topBlogPosts = await Blog.find({}, projection)
    .sort("-totalViews")
    .limit(limit);

  const latestBlogPosts = await Blog.find({}, projection)
    .sort("-createdAt")
    .limit(limit);

  // for passing as props we can only send as JSON but JSON doesn't contains Date object so we have to convert the data into string
  const topBlogs = topBlogPosts.map((blog) => {
    // we are converting the mongoose objects to normal objects because mongoose objects are not the same as regular objects and also we cannot perform all the actions on mongoose objects as we can in regular objects (here blog is the mongoose object)
    const blogObject = blog.toObject();
    // here converting the createdAt from Date object format to the DateString
    blogObject.createdAt = blogObject.createdAt.toDateString();
    return blogObject;
  });

  const latestBlogs = latestBlogPosts.map((blog) => {
    const blogObject = blog.toObject();
    blogObject.createdAt = blogObject.createdAt.toDateString();
    return blogObject;
  });

  // console.log("blogs bulk update array", blogBulkUpdateArray);
  // console.log("All parsed Data", allParsedData);

  return {
    props: { topBlogs, latestBlogs },
  };
};
