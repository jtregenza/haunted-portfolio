import styles from './layout.module.css'


const TopBar = ({exe}) => {
	return (
		<div className={styles.topBar}>
			<svg viewBox="0 0 263 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6.5H262.5M252 1H11M11 12H252" stroke="white"/>
</svg>
			<span>{exe}.exe</span>
			<svg  viewBox="0 0 263 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6.5H262.5M252 1H11M11 12H252" stroke="white"/>
</svg>
		</div>


	)
}

export default TopBar;