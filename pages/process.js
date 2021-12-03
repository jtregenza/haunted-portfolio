import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { siteTitle } from '../components/header'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import styles from '../components/layout.module.css'
import { getSortedProcessesData } from '../lib/process'
import TopBar from '../components/topbar'
import HeroPost from '../components/heroPost'
import MorePost from '../components/morePosts'

export async function getStaticProps() {
	getSortedProcessesData
  const allPostsData = getSortedProcessesData();
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
const Process = ({writingPostsData, heroPost, morePosts}) =>  (
  
    <Layout>
      <Head>
        <title>{siteTitle} | Play</title>
      </Head>
      <Sidebar data={writingPostsData} dataTitle="process"/>
      <div>
        
        {heroPost && (
          <HeroPost heroData={heroPost} slug="process"/>
            )}
            <MorePost moreData={morePosts} slug="process"/>
  
        </div>
      
    </Layout>




)

export default Process;