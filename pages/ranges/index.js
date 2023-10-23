import Head from 'next/head'
import RangesRoot from '@/components/ranges/RangesRoot'

export default function RangesPage() {
  return (
    <>
      <Head>
        <title>Ranges</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <RangesRoot />
      </main>
    </>
  )
}
