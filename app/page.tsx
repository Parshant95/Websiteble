import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import StorySection from '@/components/StorySection'
import ServicesTable from '@/components/ServicesTable'
import Testimonial from '@/components/Testimonial'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <StorySection />
      <ServicesTable />
      <Testimonial />
      <Newsletter />
      <Footer />
    </main>
  )
}
