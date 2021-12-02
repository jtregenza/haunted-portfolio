import Layout from '../../components/layout'
import Head from 'next/head'
import Sidebar from '../../components/sidebar';
import { siteTitle } from '../../components/header';
import { getAllWritingIds, getSortedWritingsData, getWritingData } from '../../lib/writing';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../../components/layout.module.css'
import TopBar from '../../components/topbar';


const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 6000, y: 0 },
}


const WritingPost = ({ writingPostData, writingPostsData }) => (
    <Layout>
      <Head>
        <title>{writingPostData.title} | {siteTitle}</title>
      </Head>
      <Sidebar data={writingPostsData} dataTitle="writing"/>
      <AnimatePresence 
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.main
					initial="hidden"
					animate="enter"
					exit="exit"
					variants={variants}
					transition={{ type: 'linear' }}
					className={styles.mainArticle}
          key={writingPostData.title}
					>

          <TopBar exe="reading_this_today"/>
        <header>
          <h1>{writingPostData.title}</h1>
          <div className={styles.metadata}>
            <small>{writingPostData.date}</small>
            <small>{writingPostData.type}</small>
          </div>
        </header>
      <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: writingPostData.contentHtml }} />
      
      
      
      </motion.main>
      </AnimatePresence>
    </Layout>
  )

export async function getStaticPaths() {
  
  const paths = getAllWritingIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const writingPostsData = getSortedWritingsData()
  const writingPostData = await getWritingData(params.id)
  return {
    props: {
      writingPostData,
      writingPostsData
    }
  }
}


export default WritingPost;