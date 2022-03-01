import Link from 'next/link'
import Container from './container'

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <Container>
          <p className="footer-text">&copy; {new Date().getFullYear()} Sam Baldwin. Website by{' '}
            <Link href="https://piperhaywood.com">
              <a>Piper Haywood</a>
            </Link>. More content to come.
          </p>
        </Container>
      </footer>
      <style jsx>{`
        .site-footer {
          padding-bottom: 1.875rem;
          padding-top: 2.125rem;
        }
      `}</style>
    </>
  )
}
