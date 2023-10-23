import Head from 'next/head'
import RangeRoot from '@/components/range/RangeRoot'

export default function RangePage() {
  return (
    <>
      <Head>
        <title>Range Editor</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <RangeRoot />
      </main>
    </>
  )
}
