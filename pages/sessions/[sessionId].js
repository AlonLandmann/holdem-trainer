import Head from 'next/head'
import SessionRoot from '@/components/session/SessionRoot'

export default function SessionPage() {
  return (
    <>
      <Head>
        <title>Training Session</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <SessionRoot />
      </main>
    </>
  )
}
