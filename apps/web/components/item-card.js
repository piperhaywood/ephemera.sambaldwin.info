import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export default function ItemCard({ title, mainImage, slug }) {
  return (
    <Link href="/item/[slug]" as={`/item/${slug}`}>
      <figure key={mainImage._key}>
        <img src={urlFor(mainImage.asset).width(900).url()} alt={title} />
      </figure>
    </Link>
  );
}
