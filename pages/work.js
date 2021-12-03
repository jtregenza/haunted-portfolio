import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { siteTitle } from '../components/header'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import styles from '../components/layout.module.css'
import { getSortedWorksData } from '../lib/work'
import TopBar from '../components/topbar'
import HeroPost from '../components/heroPost'
import MorePost from '../components/morePosts'

export async function getStaticProps() {
  const allPostsData = getSortedWorksData();
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
const Work = ({writingPostsData, heroPost, morePosts}) =>  (
  
    <Layout>
      <Head>
        <title>{siteTitle} | Play</title>
      </Head>
      <Sidebar data={writingPostsData} dataTitle="work"/>
      <div>
        
      {heroPost && (
        <HeroPost heroData={heroPost} slug="work"/>
          )}
        <MorePost moreData={morePosts} slug="work"/>

      </div>
      
    </Layout>




)

export default Work;