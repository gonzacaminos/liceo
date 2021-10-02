
import Head from 'next/head'

export default function Layout(props) {
  return (
    <main {...props}>
     <Head>
        <title>{props.title || 'Formacion Visual - 3B'}</title>
        <meta name="description" content="App Description"/>
      </Head>
    {props.children}
    </main>
  )
}