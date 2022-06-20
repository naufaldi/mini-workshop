import { Box } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box display={'flex'} flexDirection={'column'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
          repudiandae aperiam nobis nemo, esse dolores obcaecati nulla! Quod
          ratione, maxime tenetur ipsam quo, soluta ab nisi aut debitis,
          pariatur officiis.
        </Box>
      </main>
    </>
  )
}
