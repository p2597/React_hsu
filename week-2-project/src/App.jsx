import './App.css'
import Header from './components/Navbar'
import Main from './components/Main'
import { Link, Outlet} from 'react-router';
export default function App() {


  return (
    <>
      <Header/>
      <Main />


      <Link to="/videos">Videos</Link>
      <Outlet />
    </>

  )
}


