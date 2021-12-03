
import styles from './layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TopBar from './topbar'





export default function MorePost({moreData, slug}) {

	function truncateString(str, num) {
		if (str.length <= num) {
		  return str
		}
		return str.slice(0, num) + '...'
	  }

	return(
		<div className={styles.postCards}>
        {moreData.map(({ id, title, excerpt, thumbnail  }) => (
          <div className={styles.card} key={id}>
          <TopBar exe="main_post"/>
        <header><Image src={thumbnail} width={50} height={50} alt={`thumbnail for ${title}`}/><h3>{title}</h3></header>
          <p>{truncateString(excerpt, 100)}</p>
          <Link href={`/${slug}/${id}`} passHref>
            <button>Read More</button>
          </Link>
          </div>
        ))}
        </div>
	)
}



