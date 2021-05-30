import Head from 'next/head'
import Landing from './landing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Typeracer clone</title>
        <meta name="description" content="typing speed calculator" />
      </Head>
      <Landing />
    </div>
  )
}
