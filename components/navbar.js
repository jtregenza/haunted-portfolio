import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/router";
import styles from './layout.module.css'
import NavItem from './navItem';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [color, setColor] = useState('')

  const colors = [
    {
        name: "Lightless Room",
        id: "lightless-room",
        label: "lightless room [dark]" ,
    },     {
      name: "Blinding Truth",
      id: "blinding-truth",
      label: "blinding truth [light]" ,
  },     {
      name: "Lightless Room",
      id: "lightless-room",
      label: "lightless room [dark]" ,
  },
];


  const handleClick = () => {
    setActive(!active);
  };

  

  return (
      <header theme={color} className={`${
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
        <NavItem name="settings">
          <motion.div 

          initial={{top: -500}}
          animate={{top: '1.85rem' }} 
          exit={{top:-500}}
          className={styles.colorChanger}>
            theme colour
            <button onClick={() => setColor('dark')}>lightless room [dark]</button>
            <button onClick={() => setColor('light')}>blinding truth [light]</button>
            <button onClick={() => setColor('red')}>ruby absolution [red]</button>
          </motion.div>
          </NavItem>
          <Link href="/" className={router.pathname == "/" ? styles.active : ""}>josh_tregenza</Link> 
        </header>
  );
};