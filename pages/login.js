import Head from 'next/head'
import LoginRoot from '@/components/auth/LoginRoot'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <LoginRoot />
      </main>
    </>
  )
}
