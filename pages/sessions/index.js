import Head from 'next/head'
import SessionsRoot from '@/components/sessions/SessionsRoot'

export default function RangesPage() {
  return (
    <>
      <Head>
        <title>Training</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <SessionsRoot />
      </main>
    </>
  )
}
