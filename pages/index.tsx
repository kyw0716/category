import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import NavBarMenu from '../component/feat/navigation/Category';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavBarMenu/>
    </div>
  )
}

export default Home
