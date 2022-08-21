import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h2 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h2>
      <span className="date"><em>{props.date}</em></span>
      <h6 className={props.title ? "resume-subtitle" : "resume-no-title"}>
      <a href={props.company_url}
      className={`company_url`}
      target="_blank"
      rel="noopener noreferrer">
      {props.subtitle}
      <i
       className={`fas fa-external-link-alt`}
        style={{ paddingLeft: "10px" }}></i>
      </a>
        </h6>
      <p>
       
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
