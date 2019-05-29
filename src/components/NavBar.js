import React from 'react';
import Button from 'react-bootstrap/Button';
import '../scss/style.scss';

const NavBar = ({ shuffle = () => {}, addPicture = () => {} }) => (
    <div className="navbar">
        <div className="title">
            <h1 className="name">Exposition Catherine Serry</h1>
        </div>
        <Button className="navbar-btn add-btn" onClick={addPicture}>
            Ajouter une images
        </Button>
        <Button className="navbar-btn" onClick={shuffle}>
            Mélanger 
        </Button>
    </div>
);

export default NavBar;