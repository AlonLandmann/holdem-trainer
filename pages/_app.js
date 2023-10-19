import { Toaster } from 'react-hot-toast'
import '@/scss/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}