import Head from 'next/head'
import dbConnect from '@/db/dbConnect'
import Day from '@/db/models/Day'
import AdminRoot from '@/components/admin/AdminRoot'

export default function AdminPage({ daysJson }) {
  const days = JSON.parse(daysJson)
  
  return (
    <>
      <Head>
        <title>Admin</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <AdminRoot days={days} />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  dbConnect()

  const days = await Day.find({}, { _id: 0 }).sort({ date: 1 })

  return { props: { daysJson: JSON.stringify(days) }  }
}