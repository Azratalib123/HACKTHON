import React from "react";
import Link from "next/link";
import BlogCard from "../components/BlogCard";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";
import { SiteHeader } from "../components/site-header"
import { ProductCard }from '../components/product-card'
import Footer from '../components/footer'

export default function blogPage() {
    return (
      <section className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 px-4 sm:px-6">
        </main>
          <div className="back relative h-[300px] bg-center">
            <div className="absolute inset-0 bg-black/50" />
            <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white relative z-10">
              <h1 className="text-4xl font-bold mb-2">BLOG</h1>
              <div className="flex items-center space-x-2">
                <span>Home</span>
                <span>/</span>
                <span>Blog</span>
              </div>
            </div>
            </div>   
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogs}>
          <BlogCard
            image="/images/IMG-20241209-WA0005.jpg"
            title="Going all-in with millennial design"
            description="lorem ipsum dolor sit amet,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled . "
            author="Admin"
            date="08 Oct 2023"
            category="Wood"
          />
          <BlogCard
            image="/images/IMG-20241209-WA0009.jpg"
            title="Exploring new ways of decorating"
            description="Lorem an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
            author="Admin"
            date="08 Oct 2023"
            category="Handmade"
          />
           <BlogCard
            image="/images/IMG-20241209-WA0008.jpg"
            title="Exploring new ways of decorating"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown  "
            author="Admin"
            date="08 Oct 2023"
            category="Handmade"
          />
        </div>
        <Sidebar />
      </main>
    </div>
  
    <footer>
      <Footer />
    </footer>
    </section>
)}