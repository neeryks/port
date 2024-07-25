import Hero from '@/components/hero'
import WorksGrid from '@/components/works-grid'
import ScrollMarquee from '@/components/marquee'

function page() {
  return (
    <main>
      <Hero/>
      <div className="flex justify-center text-3xl md:text-7xl font-light text-center">
                <ScrollMarquee></ScrollMarquee>           
      </div>
      <div className='md:mt-32 mt-20 flex justify-center'>
        <WorksGrid></WorksGrid>
      </div>
      
    </main>
    
  )
}

export default page