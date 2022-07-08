import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import BlogPreviewList from 'components/Blog/BlogPreviewList';
import connectDB from 'database/connectDB';
import getFileNames from 'utils/getFileNames';
import readBlogFiles from 'utils/readBlogFiles';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Showbazi Blog</title>
      </Head>

      <BlogPreviewList />
    </div>
  )
}

export default Home;

export const getStaticProps = async () => {
  // connecting the database with the server
  await connectDB();
  
  const fileNames = getFileNames();

  fileNames.map(fileName => {
    const slug = fileName.replace('.mdx', '')

    const parsedFile = readBlogFiles(fileName);

    console.log(parsedFile);
  })
  console.log("fiilenames", fileNames);

  return {
    props: {},
  }
}