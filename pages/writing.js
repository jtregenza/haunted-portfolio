import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { siteTitle } from '../components/header'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import { getSortedWritingsData } from '../lib/writing'
import styles from '../components/layout.module.css'
import TopBar from '../components/topbar'
import HeroPost from '../components/heroPost'

export async function getStaticProps() {
  const allPostsData = getSortedWritingsData();
  const writingPostsData = allPostsData;
  const heroPost = writingPostsData[0];
  const morePosts = writingPostsData.slice(1,4)
  return {
    props: {
      writingPostsData,
      heroPost,
      morePosts
    }
  }

}

function truncateString(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
  }

const Writing = ({writingPostsData, heroPost, morePosts}) =>  (

    <Layout>
      <Head>
        <title>{siteTitle} | Writing</title>
      </Head>
      <Sidebar data={writingPostsData} dataTitle="writing"/>
      <div>
        
      {heroPost && (
        <HeroPost heroData={heroPost} slug="writing"/>
       )}
          <div className={styles.postCards}>
        {morePosts.map(({ id, title, excerpt, thumbnail  }) => (
          <div className={styles.card} key={id}>
            <TopBar exe="main_post"/>
          <header><Image src={thumbnail} width={50} height={50} alt={`thumbnail for ${title}`}/><h3>{title}</h3></header>
            <p>{truncateString(excerpt, 100)}</p>
            <Link href={`/writing/${id}`} passHref>
              <button>Read More</button>
            </Link>
            </div>
        ))}
        </div>

      </div>
      
    </Layout>




)

export default Writing;