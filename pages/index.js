import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Main from "../Components/main"
import NoSSR from '../Components/NoSSR'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Phezzan Protocol</title>
        <meta name="description" content="World's first interest earning perpetual DEX." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NoSSR>
          <Main/>
      </NoSSR>
    </div>
  )
}
