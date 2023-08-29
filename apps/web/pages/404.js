import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'

export default function Custom404() {
  return (
    <Layout>
      <Container>
        <article>
          <Head>
            <title>
              404 error | Ephemera
            </title>
          </Head>
          <section>
            <h1>404 error :(</h1>
            <p>Unfortunately we couldn’t find the resource you’re looking for.</p>
          </section>
        </article>
      </Container>
    </Layout>
  )
}