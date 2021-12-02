import { useState } from "react";
import styles from './layout.module.css'
import Link from 'next/link';


export default function Sidebar({ data, dataTitle}) {
    const [showMe, setShowMe] = useState(true);
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };
    function toggle(){
      setShowMe(!showMe);
    }
    return (
	<aside className={`
	${ active ? '' : styles.mobileShow} ${styles.sidebar}
	  ${ showMe ? '' : styles.smallBar } ${styles.wideBar}`}>
        <div className={styles.sidebarInner} style={{
        display: showMe?"flex":"none"
      }}>
		<header className={styles.sidebarHeader}>
        <h3>{dataTitle}</h3>
        <small>{data.length} items</small>
      </header>
      <ul>
      {data.map(({ id, title  }) => (
              <li key={id}><Link href={`/${dataTitle}/${id}`} >
                {title}
              </Link></li>
          ))}
          </ul>
            <a className={styles.contactButton} href="#">contact</a>
			{/* Turn this into modal cta */}
            
        <button className={`${styles.menuLogo} ${styles.articleListToggle}`} onClick={handleClick}> <span>{`${ active ? '▴' : '▾'}`}</span></button>
        
        </div>
    <button className={styles.toggle} onClick={toggle}>{showMe?"◂":"▸"}</button>
    
    </aside>

    )
  }

  