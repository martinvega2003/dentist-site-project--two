import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import BlogSection from './sections/BlogSection'
import FAQSection from './sections/FAQSection'
import bgImage from "../images/hero-bg.jpeg"
import PartnersSection from './sections/PartnersSection'

export const MainPage = () => {
  return (
    <main>
        <Hero bgImage={bgImage} heading="Y our Dental Health, Our Priority" subheading="Delivering expert dental care to families in Austin, TX, since 2001. Let us help you achieve a healthy, radiant smile." />
        <PartnersSection />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <BlogSection />
        <FAQSection />
    </main>
  )
}
