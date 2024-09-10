import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar-footer/Navbar'

//pages
import Landing from './pages/Landing'
import Advert from './pages/Advert';
import Details from './pages/details';
import Faq from './pages/Faq';
import Notifications from './pages/Notifications';
import Sell from './pages/Sell';
import Subscription from './pages/Subscription';
import Wishlist from './pages/Wishlist';



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar />}>
    <Route index element={<Landing />} />
    <Route path='advert' element={<Advert />}/>
    <Route path='faq' element={<Faq />}/>
    <Route path='notifications' element={<Notifications />}/>
    <Route path='sell' element={<Sell />}/>
    <Route path='subscription' element={<Subscription />}/>
    <Route path='wishlist' element={<Wishlist />}/>
    <Route path='/details/:id' element={<Details/>}/>
  </Route>
));

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
