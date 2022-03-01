import ItemCard from './item-card'

export default function Items({ items }) {
  return (
    <section>
      {items.map((item) => (
        <div key={item._id}>
          <ItemCard
            title={item.title}
            mainImage={item.mainImage}
            slug={item.slug}
          />
        </div>
      ))}
    </section>
  )
}
