import Arrivals from './Arrivals/Arrivals';
import Banner from './Banner/Banner';
import Brands from './Brands/Brands';
import Selling from './Selling/Selling';

const Main = () => {
  return (
    <main className='main'>
      <Banner/>
      <Brands/>
      <Arrivals/>
      <Selling/>
    </main>
  )
}

export default Main
