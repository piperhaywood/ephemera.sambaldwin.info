import Image from 'next/image'
import { urlFor } from '../lib/sanity'

export default function Images({ images }) {
  return (
    <>
      {(images && images.length > 0) && (
        <>
        {images.map(image =>
          <figure className="item-figure" key={image._key}>
            <Image
              src={urlFor(image.asset).width(900).url()}
              width={image.width}
              height={image.height}
              alt={image.alt || ' '} // TODO Why isn’t this working?
            />
          </figure>
        )}
        </>
      )}
      <style jsx>{`
        .item-figure {
          margin-bottom: var(--gutter-y);
        }
        .item-figure:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </>
  )
}
