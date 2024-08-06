import {BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar';
import GsapTransition from './components/GsapTransition';
// import Footer from './components/Footer';


const App = () => {
  return (
 <>
    <BrowserRouter>
    <Navbar/>
    <GsapTransition/>
    
    {/* <Footer/> */}
    </BrowserRouter>
 </>
  )
}

export default App