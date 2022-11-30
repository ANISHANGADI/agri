import React from 'react'
import { Link } from 'react-router-dom'
import background from '../images/background.jpg'
function Header() {
  return (
 <div className='header'>
  <div className="container main__container">
    <div className="main__container-left">
      <h1>Welcome to our Agriculture Portal</h1>
      <h4>All stop destination for all your cultivation needs</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate explicabo fugit alias ex mollitia doloremque non, eligendi architecto ab quasi, quisquam maiores voluptates pariatur laborum rem laboriosam quis nostrum a.</p>
      <Link to='/login' className='btn__header' >Get Started</Link>
    </div>
    <div className="main__container-right">
      <div className="img__conatiner__right">
        <img src={background} alt="background"/>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Header