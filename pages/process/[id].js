import Layout from '../../components/layout'
import Head from 'next/head'
import Sidebar from '../../components/sidebar';
import { siteTitle } from '../../components/header';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../../components/layout.module.css'
import { getAllProcessIds, getSortedProcessesData, getProcessData } from '../../lib/process';


const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 6000, y: 0 },
}


const ProcessPost = ({ processPostData, processPostsData }) => (
    <Layout>
      <Head>
        <title>{processPostData.title} | {siteTitle}</title>
      </Head>
      <Sidebar data={processPostsData} dataTitle="process"/>
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
          key={processPostData.title}
					>

        <header>
          <h1>{processPostData.title}</h1>
          <div className={styles.metadata}>
            <small>{processPostData.date}</small>
            <small>{processPostData.type}</small>
          </div>
        </header>
      <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: processPostData.contentHtml }} />
      

      
      
      </motion.main>
      </AnimatePresence>
    </Layout>
  )

export async function getStaticPaths() {
  
  const paths = getAllProcessIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const processPostsData = getSortedProcessesData()
  const processPostData = await getProcessData(params.id)
  return {
    props: {
      processPostData,
      processPostsData
    }
  }
}


export default ProcessPost;