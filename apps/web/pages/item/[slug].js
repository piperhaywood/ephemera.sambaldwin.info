import Head from 'next/head'
import {PortableText} from '@portabletext/react'
import client from '../../client'
import Container from '../../components/container'
import DesignerInfo from '../../components/designer-info'
import Images from '../../components/images'
import ItemInfo from '../../components/item-info'
import ItemPagination from '../../components/item-pagination'
import ItemTitle from '../../components/item-title'
import Layout from '../../components/layout'
import Meta from '../../components/meta'
import Tags from '../../components/tags'
import { getCurrentQuery, itemQuery } from '../../lib/queries'
import { urlFor } from '../../lib/sanity'

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

export default function Item({ item }) {

  return (
    <>
      <Layout>
        <Container>
          <>
            <article className="item-layout">
              <Head>
                <title>
                  {item.title} | Ephemera
                </title>
              </Head>
              <Meta
                path={`/item/${item.slug}`}
                title={item.title}
                image={item.mainImage}
                type="article"
                publishedTime={item.publishedAt}
              />
              <section className="item-text">
                <header className="item-header">
                  <div className="item-data">
                    <ItemTitle title={item.title} />

                    <ItemInfo
                      width={item.width}
                      height={item.height}
                      date={item.artworkDate}
                    />

                    {(item.designer && !item.designer._weak) && (
                      <DesignerInfo designer={item.designer} />
                    )}
                  </div>

                  <PortableText
                    value={item.notes}
                    components={ptComponents}
                  />

                  <Tags tags={[item.tags, item.typefaces]} />

                  <ItemPagination
                    next={item.next}
                    prev={item.prev}
                  />
                </header>
              </section>

              <section className="item-images">
                <Images images={item.images} />
              </section>
            </article>
          </>
        </Container>
      </Layout>
      <style jsx>{`
        .item-layout {
          margin-top: var(--gutter-y);
        }
        .item-text {
          position: relative;
        }
        .item-header {
          padding-bottom: 2.5rem;
          position: sticky;
          top: var(--gutter-y);
        }
        .item-data {
          margin-bottom: 1rem;
        }
        @media (min-width: 50em) {
          .item-layout {
            column-gap: clamp(1rem, 9vw, 7.375rem);
            display: grid;
            grid-template-columns: 1fr 17.5rem;
          }
          .item-text {
            grid-column: 2;
            grid-row: 1;
          }
          .item-images {
            grid-column: 1;
            grid-row: 1;
          }
        }
      `}</style>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(getCurrentQuery("item"))
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params
  const item = await client.fetch(itemQuery, { slug })
  return {
    props: {
      item
    }
  }
}
