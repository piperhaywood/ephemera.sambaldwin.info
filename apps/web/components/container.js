export default function Container({ children }) {
  return (
    <>
      <div className="container">
        {children}
      </div>
      <style jsx>{`
        .container {
          padding: 0 var(--gutter-x);
        }
      `}</style>
    </>
  )
}
