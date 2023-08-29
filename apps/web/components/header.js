import Link from "next/link";
import Container from "./container";

export default function Header() {
  return (
    <>
      <header className="site-header">
        <Container>
          <h1 className="site-title">
            <Link href="/">Ephemera</Link>
          </h1>
        </Container>
      </header>
      <style jsx>{`
        .site-header {
          margin-bottom: 4.375rem;
          margin-top: var(--gutter-y);
        }
        .site-title {
          font-size: inherit;
          font-weight: inherit;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}
