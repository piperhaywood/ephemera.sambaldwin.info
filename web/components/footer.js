import Link from 'next/link'
import Container from './container'

export default function Footer() {
  return (
    <footer>
      <Container>
        <p>&copy; Sam Baldwin. Website by{' '}
          <Link href="https://piperhaywood.com">
            <a>Piper Haywood</a>
          </Link>.
        </p>
      </Container>
    </footer>
  )
}
