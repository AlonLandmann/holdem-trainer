import Head from 'next/head'
import AdminRoot from '@/components/admin/AdminRoot'

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Admin</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <AdminRoot />
      </main>
    </>
  )
}