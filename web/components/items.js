import ItemCard from './item-card'

export default function Items({ items }) {
  return (
    <>
      <section className="items">
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
      <style jxs>{`
        .items {
          column-gap: 0.75rem;
          display: grid;
          grid-template-columns: repeat( auto-fit, minmax(12rem, 1fr) );
          row-gap: 0.75rem;
        }
      `}</style>
    </>
  )
}
