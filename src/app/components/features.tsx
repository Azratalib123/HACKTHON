// import { Trophy, Clock, Truck, Headphones } from 'lucide-react'
import { GiTrophy,GiTruck,GiHeadphones } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa6";
import styles from '../styles/features.module.css'
import Link from "next/link";
const features = [
  {
    icon: GiTrophy,
    title: 'High Quality',
    description: 'Crafted from top materials'
  },
  {
    icon: FaRegClock ,
    title: 'Warranty Protection',
    description: 'Over 2 years'
  },
  {
    icon: GiTruck,
    title: 'Free Shipping',
    description: 'Order over 150 $'
  },
  {
    icon: GiHeadphones,
    title: '24/7 Support',
    description: 'Dedicated support'
  }
]

export default function Features() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.iconWrapper}>
                <feature.icon size={24} />
              </div>
              <div className={styles.content}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


