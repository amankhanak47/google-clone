import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Search from './Search';

const Home = () => {
  return (
    <div className='home'>
      <div className="home-header">
          <div className="home-header-left">
              <Link to="/about">About</Link>
              <Link to="/store">Store</Link>


          </div>
          <div className="home-header-right">
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
            <AppsIcon/>
            <AccountCircleSharpIcon/>

          </div>

      </div>
      <div className="home-body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
        <div className="home-input-container">
          <Search/>
        </div>
      </div>
    </div>
  )
}

export default Home
