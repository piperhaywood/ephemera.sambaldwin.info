import Head from 'next/head'
import client from '../../client'
import Container from '../../components/container'
import Items from '../../components/items'
import Layout from '../../components/layout'
import Meta from '../../components/meta'
import { getCurrentQuery, tagQuery, tagItemsQuery } from '../../lib/queries'

export default function Tag({tag, items}) {
  return (
    <>
      <Layout>
        <Container>
          <>
            <Head>
              <title>Tag: {tag.title} | Emphemera</title>
            </Head>
            <Meta
                path={`/tag/${tag.slug}`}
                title={`Tagged ${tag.title}`}
                // image={item.mainImage} // TODO Add image
                type="website"
              />
            <p>Tag: {tag.title}</p>
            {items.length > 0 && <Items items={items} />}
          </>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(getCurrentQuery("tag"))
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params

  const tag = await client.fetch(tagQuery, { slug })
  const _id = tag._id;
  const items = await client.fetch(tagItemsQuery, { _id });

  const data = {
    props: {
      tag,
      items
    }
  }

  return data
}
