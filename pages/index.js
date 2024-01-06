import Head from 'next/head'
import HomeRoot from '@/components/home/HomeRoot'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hold'em Trainer</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <HomeRoot />
      </main>
    </>
  )
}
