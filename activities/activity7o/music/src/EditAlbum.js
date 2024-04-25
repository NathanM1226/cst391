import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";

const EditAlbum = (props) => {
    let album = {
        title: '',
        artist: '',
        description: '',
        year: '',
        image: '',
        tracks: [],
    };
    let newAlbumCreation = true;

    if(props.album) {
        album = props.album;
        newAlbumCreation = false;
    }


    const [albumTitle, setAlbumTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("submit");
        const editedAlbum = {
            albumId: album.albumId,
            title: albumTitle,
            artist: artist,
            description: description,
            year: year,
            image: image,
            tracks: [],
        };
        console.log(album);

        saveAlbum(editedAlbum);
    };
    
    const saveAlbum = async (album) => {
        let response;
        if (newAlbumCreation)
            response = await dataSource.post('/albums', album);
        else
            response = await dataSource.put('/albums', album);
        console.log(response);
        console.log(response.data);
        props.onEditAlbum(navigate)
    };

    const handleCancel = () => {
        navigate("/");
    };

    const updateTitle = (event) => {
        setAlbumTitle(event.target.value);
    };

    const updateArtist = (event) => {
        setArtist(event.target.value);
    };
    
    const updateDescription = (event) => {
        setDescription(event.target.value);
    };

    const updateYear = (event) => {
        setYear(event.target.value);
    };

    const updateImage = (event) => {
        setImage(event.target.value);
    };

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <h1>{newAlbumCreation ? "Create New" : "Edit"} Album</h1>
                    <div className="form-group">
                        <label htmlFor="albumTitle">Album Title</label>
                        <input type="text" className="form-control" id="albumTitle" placedholder="Enter Album Title" onChange={updateTitle} />
                        <label htmlFor="albumArtist">Artist</label>
                        <input type="text" className="form-control" id="albumArtist" placedholder="Enter Album Title" onChange={updateArtist} />
                        <label htmlFor="albumDescription">Description</label>
                        <textarea type="text" className="form-control" id="albumDescription" placedholder="Enter Album Description" onChange={updateDescription} />
                        <label htmlFor="albumYear">Year</label>
                        <input type="text" className="form-control" id="albumYear" placedholder="Enter Album Year" onChange={updateYear} />
                        <label htmlFor="albumImage">Image Link</label>
                        <input type="text" className="form-control" id="albumImage" placedholder="Enter Album Image Link" onChange={updateImage} />
                    </div>
                    <div align="center">
                        <button type="button" className="btn btn-light" onClick={handleCancel}>Cancel</button>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
            </form>
        </div>
    );
};

export default EditAlbum;