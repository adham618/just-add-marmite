import Link from "next/link"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Link href='/'>
          <a>
            <h1>
              <span>ust Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spreed The Joy</h2>
          </a>
        </Link>
      </header>
      <div className="page-content">
        {children}
      </div>
      <footer>
        <p>Copyright {new Date().getFullYear()} Just Add Marmite</p>
      </footer>
    </div>
  )
}
export default Layout