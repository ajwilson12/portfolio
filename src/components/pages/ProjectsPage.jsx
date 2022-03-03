import React from 'react'
import './ProjectsPage.css'

const ProjectsPage = (props) => {
  return (
    <div id='projectsPageContainer' onWheel={() => {props.handleBackgroundPlay(); props.handleLlamaPlay();}}>
      
      <h1>Hi, I'm Arran</h1>
          <h2>web designer</h2>
      
    </div>
  )
}

export default ProjectsPage