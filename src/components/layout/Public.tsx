import { Link, Outlet } from 'react-router-dom';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Counter', path: '/counter' },
  { name: 'From', path: '/from' },
  { name: 'API', path: '/fetch-data' }

]

export default function Public() {

  return (
    <div className="bg-light min-vh-100">
      <header>
        <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
          <div className="container">
            <span className="navbar-brand">React Basics</span>
            <div className="navbar-nav d-flex flex-row gap-3">
              {navigation.map((item) => (
                <Link key={item.name} to={item.path} className="nav-link">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <main className="container py-5">
        <Outlet />
      </main>
    </div>
  )
}
