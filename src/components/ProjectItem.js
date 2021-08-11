import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesUsed = technologies.map((e, index) => {
    return <span key={index}>{e}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesUsed}
      </div>
    </div>
  );
}

export default ProjectItem;
