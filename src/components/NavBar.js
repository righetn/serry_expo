import React from 'react';
import Button from 'react-bootstrap/Button';
import '../scss/style.scss';

const NavBar = ({ shuffle = () => {}, addPicture = () => {} }) => (
    <div>
        <div className="navbar">
            <h1 className="name">Exposition Catherine Serry</h1>
        </div>
        <Button className="navbar-btn" onClick={shuffle}>
            Mélanger 
        </Button>
        <Button className="navbar-btn" onClick={addPicture}>
            Ajouter une images 
        </Button>
    </div>
);

export default NavBar;