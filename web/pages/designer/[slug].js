import Head from 'next/head'
import client from '../../client'
import Container from '../../components/container'
import Items from '../../components/items'
import Layout from '../../components/layout'
import Meta from '../../components/meta'
import { getCurrentQuery, designerQuery, designerItemsQuery } from '../../lib/queries'

export default function Designer({designer, items}) {
  const designerName = designer.firstName ? `${designer.firstName} ${designer.lastName}` : designer.lastName

  return (
    <>
      <Layout>
        <Container>
          <>
            <Head>
              <title>Designed by {designerName} | Emphemera</title>
            </Head>
            <Meta
                path={`/designer/${designer.slug}`}
                title={`Designed by ${designerName}`}
                // image={item.mainImage} // TODO Add image
                type="website"
              />
            <p>Designed by {designerName}</p>
            {items.length > 0 && <Items items={items} />}
          </>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(getCurrentQuery("designer"))
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params

  const designer = await client.fetch(designerQuery, { slug })
  const _id = designer._id;
  const items = await client.fetch(designerItemsQuery, { _id });

  const data = {
    props: {
      designer,
      items
    }
  }

  return data
}
