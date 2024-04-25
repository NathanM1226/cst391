import React from 'react';

const Card = (props) => {
    const handleClick = (event, uri) => {
        console.log("Button clicked for albumId: ", props.albumId);
        props.onClick(props.albumId, uri);
    };

    return (
    <div>
        <div className="card" style={{width: '18rem'}}>
            <img src={props.imageURL} className="card-img-top" alt="title"/>
            <div className="card-body">
                <h5 className="card-title">{props.albumTitle}</h5>
                <p className="card-text">{props.albumDescription}</p>
                <button href="#" className="btn btn-primary" onClick={() => handleClick(props.albumId, '/show/')}>{props.buttonText}</button>
                <button className='btn btn-secondary' onClick={() => handleClick(props.albumId, '/edit/')}>Edit</button>
            </div>
        </div>

    </div>
    );
}

export default Card;