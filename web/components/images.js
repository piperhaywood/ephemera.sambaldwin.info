import Image from 'next/image'
import { urlFor } from '../lib/sanity'

export default function Images({ images }) {
  return (
    <>
      {images.length > 0 && (
        <>
        {images.map(image =>
          <figure key={image._key}>
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
    </>
  )
}
