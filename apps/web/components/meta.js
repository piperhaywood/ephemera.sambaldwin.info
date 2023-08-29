import Head from 'next/head'
import { ROOT } from '../lib/constants'
import { urlFor } from '../lib/sanity'

export default function Meta({path, title, image, type, description, publishedTime}) {
  const isoDate = publishedTime ? new Date(publishedTime).toISOString() : false
  return (
    <Head>
      <meta key="ogSiteName" property="og:site_name" content="Ephemera" />
      <meta key="ogUrl" property="og:url" content={`${ROOT}${path}`} />
      <meta key="ogType" property="og:type" content={type} />
      <meta key="ogTitle" property="og:title" content={title} />
      {description && (
        <>
          <meta key="description" name="description" content={description} />
          <meta key="ogDescription" property="og:description" content={description} />
        </>
      )}
      {isoDate && (
        <meta key="articlePubTime" property="article:published_time" content={isoDate} />
      )}
      {image && (
        <meta
          key="ogImage"
          property="og:image"
          content={urlFor(image).width(1200).height(627).fit('crop').url()}
        />
      )}
    </Head>
  )
}
