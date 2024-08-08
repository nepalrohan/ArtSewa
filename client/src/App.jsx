import {BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar';
import GsapTransition from './components/GsapTransition';
// import Footer from './components/Footer';
import {Provider} from 'react-redux';
import {store} from '../store/store.js';

const App = () => {
  return (
 <>
 <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <GsapTransition/>
    
    {/* <Footer/> */}
    </BrowserRouter>
    </Provider>
 </>
  )
}

export default App