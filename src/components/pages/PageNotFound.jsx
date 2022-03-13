import React from 'react'
import Button from 'react-bootstrap/Button'
import '../../sass/main.scss'
import { Link } from 'react-router-dom';
function PageNotFound() {
  return (
    <div className='pageNotFound'>
      <h1>Error: 404</h1> 
      <h2>Page not found</h2>
      <div className="spacer"></div>
      <Link to="/">
        <Button variant="primary"><p>Back</p></Button>
      </Link>
    </div>
  )
}

export default PageNotFound