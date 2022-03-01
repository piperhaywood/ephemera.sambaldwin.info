export default function ItemInfo({ width, height, date }) {
  const year = date ? new Date(date).getFullYear() : false
  const dims = width && height ? `${width} × ${height} mm` : false
  const info = [year, dims].filter(Boolean).join(', ')
  return (
    <>
      {(info) && (
        <p>{info}</p>
      )}
    </>
  )
}
