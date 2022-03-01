import Head from 'next/head'
import client from '../client'
import Container from '../components/container'
import Items from '../components/items'
import Layout from '../components/layout'
import Meta from '../components/meta'
import { indexQuery } from '../lib/queries'

export default function Index({items}) {
  return (
    <>
      <Layout>
        <Head>
          <title>Ephemera</title>
        </Head>
        <Meta
            path={``}
            title="Ephemera"
            // image={item.mainImage} // TODO Add image
            type="website"
            description="A collection of bits and bobs by Sam Baldwin. Site built by Piper Haywood."
          />
        <Container>
          {items.length > 0 && <Items items={items} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const items = await client.fetch(indexQuery)
  return {
    props: {
      items
    }
  }
}
