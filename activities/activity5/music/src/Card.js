import React from "react";

const Card = (props) => {
	return (
		<div>
		  
		  <div className="card" style= {{width: '12rem'}}>
  			<img src={props.imageURL} alt="title" />
  			<div className="card-body">
    			<h5 className="card-title">{props.albumTitle}</h5>
    			<p className="card-text">{props.albumDescription}</p>
  			</div>
		  </div>
		</div>
	)
}

export default Card;
