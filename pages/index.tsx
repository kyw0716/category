import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Button from '../component/Category';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button/>
    </div>
  )
}

export default Home
