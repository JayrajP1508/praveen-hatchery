import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Services from '@/sections/Services'
import WhyChooseUs from '@/sections/WhyChooseUs'
import Infrastructure from '@/sections/Infrastructure'
import Quality from '@/sections/Quality'
import GalleryPreview from '@/sections/GalleryPreview'
import Testimonials from '@/sections/Testimonials'
import ContactCTA from '@/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Infrastructure />
      <Quality />
      <GalleryPreview />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
