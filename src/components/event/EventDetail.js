import React from 'react'

function ProjectDetail(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>kdsfhdskghfgjfdhgjfdhgfjdghfdjghfdjfdgjfdhgjfdhgjfd</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the </div>
                    <div>August 9th, 2pm</div>
                </div>

            </div>
            
        </div>
    )
}

export default ProjectDetail
