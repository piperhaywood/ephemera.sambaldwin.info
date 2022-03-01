import { preventWidow } from '../lib/sanity'

export default function ItemTitle({ title }) {
  return (
    <>
      <h1 className="item-title">{preventWidow(title, 5, 5) ?? 'Untitled'}</h1>
      <style jsx>{`
        .item-title {
          margin-bottom: 0;
        }
      `}</style>
    </>
  )
}
