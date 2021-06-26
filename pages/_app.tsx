import '../styles/globals.css'
import "../styles/wordbox.css"
import "../styles/wordinput.css"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
