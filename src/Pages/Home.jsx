import Hero from '../layouts/Hero';
import Living from '../layouts/Living';
import Properties from '../layouts/Properties';
import Lifestyle from '../layouts/Lifestyle';
import Contact from '../layouts/Contact';
import Review from '../layouts/Review';

const Home = () => {

  return (
    /*Landing page setup*/

    <div className="Home">
      <Hero />
      <Living />
      <Properties />
      <Lifestyle />
      <Contact />
      <Review />
    </div>
  )
}

export default Home;
