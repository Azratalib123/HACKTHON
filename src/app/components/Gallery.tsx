
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
const images = [
  '/images/IMG-20241209-WA0025.jpg',
  '/images/IMG-20241209-WA0027.jpg',
  '/images/IMG-20241209-WA0026.jpg',
  '/images/IMG-20241209-WA0016.jpg',
  '/images/IMG-20241209-WA0018.jpg',
  '/images/IMG-20241209-WA0004.jpg',
  '/images/IMG-20241209-WA0014.jpg',
  '/images/IMG-20241209-WA0001.jpg'
]

export default function gallery() {
  return (
    <div className={styles.gallery}>
      {images.map((src, index) => (
        <div key={index}>
          <Image
            src={src}
            alt={`Furniture image ${index + 1}`}
            width={300}
            height={300}
            className={styles.galleryImage}
          />
        </div>
      ))}
    </div>
  )
}