import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { siteTitle } from '../components/header'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import { getSortedPlaysData } from '../lib/play'
import HeroPost from '../components/heroPost'
import MorePost from '../components/morePosts'

export async function getStaticProps() {
  const allPostsData = getSortedPlaysData();
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
const Play = ({writingPostsData, heroPost, morePosts}) =>  (
  
    <Layout>
      <Head>
        <title>{siteTitle} | Play</title>
      </Head>
      <Sidebar data={writingPostsData} dataTitle="play"/>
      <div>
        
        {heroPost && (
          <HeroPost heroData={heroPost} slug="play"/>
            )}
           <MorePost moreData={morePosts} slug="play"/>
  
        </div>
      
    </Layout>




)

export default Play;