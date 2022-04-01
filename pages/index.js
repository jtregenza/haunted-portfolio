import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'

export default function Home() {
  return (
    <Layout home>
    <div className={styles.container}>

      <main className={styles.main}>
      <div className={styles.homePage}>
      <h1>Welcome to the website of Josh Tregenza</h1>
      <article className={styles.openingBlurb}><p><code>designer, storyteller, craftsman</code></p>
      <p>As a <code>designer</code>, it is my job to make sure that businesses are putting the wellbeing of people over profits, ego and consumption so that they can find greater success.</p>
      <p>As a <code>storyteller</code>, I bring people together and uplift them with the words, products and ideas that are told.</p>
      <p>As a <code>craftsman</code>, I seek to improvise with care and follow the delightfully absurd to appreciate considerate work.</p>
      <p>I&apos;m less of a visual designer and more of a systems designer. I build teams of designers, developers and product managers to work best together. I delve into the murky ends of databases and business process to make sense of technical debt and constraints that systems develop over time to then unpack complexity and build to it, making sure the most amount of people are accounted for.</p><p>I help build culture, to be caring, compassion and quirky to encourage the best work without sacrificing health and wellbeing. </p></article>
      </div>
      </main>

    </div>
    </Layout>
  )
}
