import Head from 'next/head'
import TutorialRoot from '@/components/tutorial/TutorialRoot'

export default function TutorialPage() {
  return (
    <>
      <Head>
        <title>Hold'em Trainer</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <TutorialRoot />
      </main>
    </>
  )
}
