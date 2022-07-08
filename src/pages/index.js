import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import AppHeader from 'components/AppHeader'
import BlogPreviewList from 'components/Blog/BlogPreviewList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Showbazi Blog</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <AppHeader />

      <BlogPreviewList />
    </div>
  )
}
