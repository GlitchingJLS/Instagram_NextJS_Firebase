import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
