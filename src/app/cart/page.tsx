import Image from 'next/image'
import Link from 'next/link'
// import { Heart, ShoppingCart, User, Search } from 'lucide-react'
import { CiSearch,CiShoppingCart, CiHeart, CiUser} from "react-icons/ci";
import { SiteHeader } from "../components/site-header"
import Features from '../components/features'
import Footer from '../components/footer'
import '../styles/cart.css'

export default function CartPage() {
  return (
    <div>   
        <header className="header">
        <SiteHeader />
  </header>
  <div className="back relative h-[300px] bg-center">
            <div className="absolute inset-0 bg-black/50" />
            <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white relative z-10">
              <h1 className="text-4xl font-bold mb-2">Cart</h1>
              <div className="flex items-center space-x-2">
                <span>Home</span>
                <span>/</span>
                <span>cart</span>
              </div>
            </div>
            </div>
      <div className="cart-container">
        <div className="cart-table">
          <div className="table-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span className="subtotal">Subtotal</span>
            <span></span>
          </div>
          <div className="cart-item">
            <div className="product-info">
              <Image
                src="/images/917ac944454e358f73d0af67e1f1b74e.png"
                alt="Asgaard sofa"
                width={80}
                height={80}
                className="product-image"
              />
              <span>Asgaard sofa</span>
            </div>
            <span>Rs. 250,000.00</span>
            <input type="number" defaultValue={1} min={1} className="quantity-input" />
            <span className="subtotal">Rs. 250,000.00</span>
            <button className="remove-btn">×</button>
          </div>
        </div>

        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="totals-row">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="totals-row">
            <span>Total</span>
            <span>Rs. 250,000.00</span>
          </div>
          <button className="checkout-btn">
            Check Out
          </button>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  )
}

