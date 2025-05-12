import './App.css'
import RandomColor from './components/2 random-color';
import StarRating from './components/3 star rating';
import ImageSlider from './components/4 image-slider';
import Accordian from './components/accordian';
import LoadMoreData from './components/5 load-more-data-api';

function App() {
  return (
    <div className='App'>
      {/*  Accordian Component */}
      {/* <Accordian></Accordian> */}

      {/* Random Color Component */}
      {/* <RandomColor></RandomColor> */}

      {/* Star rating component */}
      {/* <StarRating noOfStars={10}> </StarRating> */}

      {/* Image slider component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={"10"}></ImageSlider> */}

      {/* Load more products component */}
      <LoadMoreData></LoadMoreData>


    </div>
  );
}

export default App
