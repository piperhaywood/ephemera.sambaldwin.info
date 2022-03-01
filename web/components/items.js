import ItemCard from './item-card'

export default function Items({ items }) {
  return (
    <section>
      {items.map((item) => (
        <ItemCard
          _id={item._id}
          title={item.title}
          mainImage={item.mainImage}
          slug={item.slug}
        />
      ))}
    </section>
  )
}
