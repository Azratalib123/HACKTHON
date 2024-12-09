import Image from 'next/image'
import { CiHeart, CiShare2,  } from "react-icons/ci"
import { FiBarChart2 } from "react-icons/fi";
import styles from '../styles/products.module.css'
import Link from "next/link";
const products = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    oldPrice: 3500000,
    image: '/images/IMG-20241209-WA0028.jpg',
    tag: 'sale',
    discount: '-30%',
  },
  {
    id: 2,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 2500000,
    image: '/images/WhatsApp Image 2024-12-08 at 10.16.12_0964fa4e.jpg',
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 7000000,
    oldPrice: 14000000,
    image: '/images/IMG-20241208-WA0009.jpg',
    tag: 'sale',
    discount: '-50%',
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 500000,
    image: '/images/IMG-20241209-WA0015.jpg',
    tag: 'new',
  },
  {
    id: 5,
    name: 'Grifo',
    description: 'Night lamp',
    price: 1500000,
    image: '/images/IMG-20241208-WA0012.jpg',
  },
  {
    id: 6,
    name: 'Muggo',
    description: 'Small mug',
    price: 150000,
    image: '/images/IMG-20241209-WA0021.jpg',
    tag: 'new',
  },
  {
    id: 7,
    name: 'Pingky',
    description: 'Cute bed set',
    price: 7000000,
    oldPrice: 14000000,
    image: '/images/IMG-20241209-WA0017.jpg',
    tag: 'sale',
    discount: '-50%',
  },
  {
    id: 8,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 500000,
    image: '/images/IMG-20241209-WA0019.jpg',
    tag: 'new',
  },
]

export function ProductsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.tag && (
                <span
                  className={`${styles.tag} ${
                    product.tag === 'new' ? styles.new : styles.sale
                  }`}
                >
                  {product.discount || 'New'}
                </span>
              )}
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.price}>
                Rp {product.price.toLocaleString()}
                {product.oldPrice && (
                  <span className={styles.oldPrice}>
                    Rp {product.oldPrice.toLocaleString()}
                  </span>
                )}
              </p>
            </div>
            <div className={styles.actions}>
              <button className={styles.actionButton}>
                <CiShare2 className=" w-4 h-4" />
                Share
              </button>
              <button className={styles.actionButton}>
               <FiBarChart2  className="w-4 h-4" />
                Compare
              </button>
              <button className={styles.actionButton}>
                <CiHeart className="w-4 h-4" />
                Like
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}