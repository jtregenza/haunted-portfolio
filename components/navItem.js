import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react'
import styles from './layout.module.css'

export default function NavItem(props) {
	const node = useRef();

	const [open, setOpen] = useState(false);

	const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

	useEffect(() => {
		var prevScrollPos = window.pageYOffset;
		console.log(prevScrollPos)
		if (open) {
		  document.addEventListener("mousedown", handleClickOutside);
		  document.addEventListener("mouseleave", handleClickOutside);
		  
		} else {
		  document.removeEventListener("mousedown", handleClickOutside);
		  document.removeEventListener("mouseleave", handleClickOutside);
		}
		function subMenuDisplay() {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollPos != currentScrollPos ) {
			 	setOpen(false);
			} 
			prevScrollPos = currentScrollPos;
		  }
		  window.addEventListener('scroll', subMenuDisplay);
		
	
		return () => {
		  document.removeEventListener("mousedown", handleClickOutside);
		  document.removeEventListener("mouseleave", handleClickOutside);
		};
	  }, [open]);

	return(
		<div ref={node}>
			<button className={styles.navButton} onClick={() => setOpen(!open)} >
				{props.name}
			</button>
				 {open && props.children}
			</div>
	)
}