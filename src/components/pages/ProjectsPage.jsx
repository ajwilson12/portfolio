import React from 'react'
import './ProjectsPage.css'

const ProjectsPage = (props) => {
  return (
    <div id='projectsPageContainer' onWheel={() => {props.handleBackgroundPlay(); props.handleLlamaPlay();}}>
      
      <p>
        ProjectsPage
      </p>
      
    </div>
  )
}

export default ProjectsPage