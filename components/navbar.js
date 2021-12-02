import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/router";
import styles from './layout.module.css'

export const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
      <header className={`${
            active ? '' : styles.mobile
          } ${styles.topNav}` }>
        <button className={styles.menuLogo} onClick={handleClick}> Menu <span>{`${ active ? '▴' : '▾'}`}</span></button> 
        <div
          className={`${
            active ? '' : styles.hidden
          } ${styles.menu}`}
        >
          <div className={styles.desktop}>
            <Link href="/work"><a className={router.pathname == "/work" ? styles.active : ""} onClick={handleClick}>work</a></Link>
            
            <Link href="/process"><a className={router.pathname == "/process" ? styles.active : ""} onClick={handleClick}>process</a></Link> 
            
            <Link href="/writing"><a className={router.pathname == "/writing" ? styles.active : ""} onClick={handleClick}>writing</a></Link>
            
            <Link href="/play"><a className={router.pathname == "/play" ? styles.active : ""} onClick={handleClick}>play</a></Link>
            
          </div>
        </div>
		<button>settings</button>
        <Link href="/" className={router.pathname == "/" ? styles.active : ""}>josh_tregenza</Link> 
        </header>
  );
};