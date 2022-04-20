import React from 'react'
import '../../sass/main.scss'
import { Link } from 'react-router-dom';
function PageNotFound() {
  return (
    <div className='pageNotFound'>
      <h1>Error: 404</h1> 
      <h2>Page not found</h2>
      <div className="spacer"></div>
      <Link to="/">
        <button variant="primary"><p>Back</p></button>
      </Link>
    </div>
  )
}

export default PageNotFound