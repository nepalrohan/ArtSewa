import HeroSection from '../components/HeroSection'
import PhotoGallery from '../components/PhotoGallery'

const Home = () => {
  return (
 <div className='mt-36'>
 <h1 className='text-3xl font-semibold text-gray-500 text-center'>We Value Your <span className='text-green-600'>Art...</span></h1>
  <HeroSection/>
  <PhotoGallery/>
  
 </div>
  )
}

export default Home