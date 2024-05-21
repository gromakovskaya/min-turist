import '../styles.css'
import '../App.css';
import Navbar from '../Components/Navbar';
import Slider1 from '../Components/Slider1';
import slide from '../pic/slide.png'
import slide1 from '../pic/slide1.png'
import slide2 from '../pic/slide2.jpg'
import slide3 from '../pic/slide3.jpg'
import ShowState from '../Components/ShowState';
import DevButton from '../Components/DevButton';


function Home() {
  return (
    <>
    <Slider1 >
      <img src={slide} title='Гостиный Двор'/>
      <img src={slide1} title='Памятник Салавату Юлаеву'/>
      <img src={slide2} title='Монумент Дружбы'/>
      <img src={slide3} title='Уфимский Телецентр'/>
      </Slider1>
      <ShowState />
      <DevButton />
    </>
  );
}

export default Home;