import Head from 'next/head'
import SignupRoot from '@/components/auth/SignupRoot'

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Signup</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <SignupRoot />
      </main>
    </>
  )
}
