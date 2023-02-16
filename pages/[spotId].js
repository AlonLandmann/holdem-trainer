import Head from 'next/head'
import Home from '@/components/Home'
import dbConnect from '@/js/dbConnect'
import Spot from '@/js/Spot'

export default function HomePage({ spotJson }) {
  return (
    <>
      <Head>
        <title>Holdem Trainer</title>
      </Head>
      <main>
        <Home spot={JSON.parse(spotJson)} />
      </main>
    </>
  )
}

export async function getServerSideProps({ query: { spotId } }) {
  dbConnect()

  const spot = await Spot.findOne({ id: spotId })

  return { props: { spotJson: JSON.stringify(spot) } }
}
