import styles from './layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TopBar from './topbar'





export default function HeroPost({heroData, slug}) {

	function truncateString(str, num) {
		if (str.length <= num) {
		  return str
		}
		return str.slice(0, num) + '...'
	  }

	return(
		<div className={styles.hero}>
			<div className={styles.card}>
				<TopBar exe="you_should_read_this"/>
				<div className={styles.heroImage}>
					<Image 
					src={heroData.image}
					height="650"
					width="400"
					layout="fill"
					alt={heroData.title}
					/>
				</div>
				<div className={styles.heroContent}>
				<header><h3>{heroData.title}</h3></header>
				<p>{truncateString(heroData.excerpt, 180)}</p>
				<Link href={`/${slug}/${heroData.id}`} passHref>
					<button>Read More</button>
				</Link>
				</div>
			</div>
		</div>
	)
}