import Head from 'next/head'
import RangeEditorRoot from '@/components/range-editor/RangeEditorRoot'

export default function RangeEditorPage() {
  return (
    <>
      <Head>
        <title>Edit Range</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <RangeEditorRoot />
      </main>
    </>
  )
}
