
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from '../HomePageComponent/Header';
import Homepage from '../HomePageComponent/Homepage'
import { Outlet, Link } from "react-router-dom";
import Footer from '../HomePageComponent/Footer';
import MainHomePage from '../HomePageComponent/MainHomePage';

function App() {
 return (<>
 <Header className='content'></Header>

 <Outlet/>
 <Footer></Footer>

 </>
 )
}

export default App
