import Head from 'next/head'
import Home from '../components/Home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Holdem Trainer</title>
      </Head>
      <main>
        <Home />
      </main>
    </>
  )
}
