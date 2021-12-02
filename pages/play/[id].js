import Layout from '../../components/layout'
import Head from 'next/head'
import Sidebar from '../../components/sidebar';
import { siteTitle } from '../../components/header';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../../components/layout.module.css'
import { getAllPlayIds, getSortedPlaysData, getPlayData } from '../../lib/play';


const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 6000, y: 0 },
}


const PlayPost = ({ postData, playPostsData }) => (
    <Layout>
      <Head>
        <title>{postData.title} | {siteTitle}</title>
      </Head>
      <Sidebar data={playPostsData} dataTitle="play"/>
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
          key={postData.title}
					>

        <header>
          <h1>{postData.title}</h1>
          <div className={styles.metadata}>
            <small>{postData.date}</small>
            <small>{postData.type}</small>
          </div>
        </header>
      <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      


      
      
      </motion.main>
      </AnimatePresence>
    </Layout>
  )

export async function getStaticPaths() {
  
  const paths = getAllPlayIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const playPostsData = getSortedPlaysData()
  const postData = await getPlayData(params.id)
  return {
    props: {
      postData,
      playPostsData
    }
  }
}


export default PlayPost;