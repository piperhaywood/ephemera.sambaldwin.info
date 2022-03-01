export default function Container({ children }) {
  return (
    <>
      <div className="container">
        {children}
      </div>
      <style jsx>{`
        .container {
          margin-left: auto;
          margin-right: auto;
          max-width: var(--container-max-width);
          padding: 0 var(--gutter-x);
        }
      `}</style>
    </>
  )
}
