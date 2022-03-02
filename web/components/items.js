import ItemCard from './item-card'

export default function Items({ items }) {
  return (
    <>
      <section className="items">
        {items.map((item) => (
          (item.slug && item.mainImage && item.mainImage.asset) && (
            <div key={item._id}>
              <ItemCard
                title={item.title}
                mainImage={item.mainImage}
                slug={item.slug}
              />
            </div>
          )
        ))}
      </section>
      <style jsx>{`
        .items {
          column-gap: 0.75rem;
          display: grid;
          grid-template-columns: repeat( auto-fit, minmax(13rem, 1fr) );
          row-gap: 0.75rem;
        }
      `}</style>
    </>
  )
}
