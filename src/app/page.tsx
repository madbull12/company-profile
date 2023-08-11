import AboutPagination from '@/components/AboutPagination'
import AboutUs from '@/components/AboutUs'
import CoreValues from '@/components/CoreValues'
import Footer from '@/components/Footer'
import HeroComponent from '@/components/HeroComponent'
import SpecialtyList from '@/components/SpecialtyList'


export default function Home() {
  return (
    <main >
      <HeroComponent />
      <AboutPagination />
      <CoreValues />
      <SpecialtyList />
      <Footer />
    </main>
  )
}
