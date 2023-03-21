import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import useSWR from 'swr'
const inter = Inter({ subsets: ['latin'] })

const fetcher = (args : any) => fetch(args).then((res) => res.json())

export default function Home() {
  console.log("api call")
  const { data, error } = useSWR('https://java-service.containeverse.com/account', fetcher)
  if(error){
    console.log("ERROR")
    console.log(error)
  }
  if(data){
    console.log("got data")
    console.log(data);
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Dang here</h1>
      </main>
    </>
  )
}
