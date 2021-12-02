import Header from "./header";
import Sidebar from "./sidebar";
import styles from './layout.module.css'
import { motion } from "framer-motion";

const name = 'Josh Tregenza'

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children, home }) => (

	<div className={styles.mainContainer}>
		<div className={styles.contentWrapper}>
			<section>
				<motion.main
					initial="hidden"
					animate="enter"
					exit="exit"
					variants={variants}
					transition={{ type: 'linear' }}
					className={styles.main}
					>
					{children}
					</motion.main>
			</section>
		</div>
	</div>
  );


export default Layout;