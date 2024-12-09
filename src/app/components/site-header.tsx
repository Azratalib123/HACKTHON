
import Link from "next/link"
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci"
import '../styles/SiteHeader.css'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="logo-link">
          <img 
            src="/images/IMG-20241208-WA0006.jpg" 
            alt="Logo"
            className="logo-image"
          />
        </Link>
        <nav className="nav-menu">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/shop" className="nav-link">
            Shop
          </Link>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
        <div className="icon-container">
          <CiUser className="icon" />
          <span className="sr-only">Account</span>

          <CiSearch className="icon" />
          <span className="sr-only">Search</span>
        
          <CiHeart className="icon" />
          <span className="sr-only">Wishlist</span>
  
          <CiShoppingCart className="icon" />
          <span className="sr-only">Cart</span>
        </div>
      </div>
    </header>
  )
}

