import Head from 'next/head'
import client from '../../client'
import Container from '../../components/container'
import Items from '../../components/items'
import Layout from '../../components/layout'
import Meta from '../../components/meta'
import { getCurrentQuery, typefaceQuery, typefaceItemsQuery } from '../../lib/queries'

export default function Typeface({typeface, items}) {
  return (
    <>
      <Layout>
        <Container>
          <>
            <Head>
              <title>Typeface: {typeface.title} | Emphemera</title>
            </Head>
            <Meta
                path={`/typeface/${typeface.slug}`}
                title={`Includes typeface: ${typeface.title}`}
                // image={item.mainImage} // TODO Add image
                type="website"
              />
            <p>Includes typeface: {typeface.title}</p>
            {items.length > 0 && <Items items={items} />}
          </>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(getCurrentQuery("typeface"))
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params

  const typeface = await client.fetch(typefaceQuery, { slug })
  const _id = typeface._id;
  const items = await client.fetch(typefaceItemsQuery, { _id });

  const data = {
    props: {
      typeface,
      items
    }
  }

  return data
}
