import Layout from '../../components/layout'
import Head from 'next/head'
import Sidebar from '../../components/sidebar';
import { siteTitle } from '../../components/header';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../../components/layout.module.css'
import { getAllWorkIds, getSortedWorksData, getWorkData } from '../../lib/work';


const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 6000, y: 0 },
}


const WorkPost = ({ postData, workPostsData }) => (
    <Layout>
      <Head>
        <title>{postData.title} | {siteTitle}</title>
      </Head>
      <Sidebar data={workPostsData} dataTitle="work"/>
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
  
  const paths = getAllWorkIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const workPostsData = getSortedWorksData()
  const postData = await getWorkData(params.id)
  return {
    props: {
      postData,
      workPostsData
    }
  }
}


export default WorkPost;