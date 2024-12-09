import { SiteHeader } from "./components/site-header"
import { HeroSection } from "./components/hero-section"
import page from "./page"
import {BrowseSection} from "./components/browse-section"
import {ProductsSection} from "./components/product-section"
import Hero from './components/hero'
import RoomShowcase from './components/room-showcase'
import Gallery from './components/Gallery'
import Footer from './components/footer'



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
      </main>
      <BrowseSection />
      <ProductsSection/>

      <Hero />
      <RoomShowcase />
      <Gallery />
      <Footer />

    </div>
  )
}



    


