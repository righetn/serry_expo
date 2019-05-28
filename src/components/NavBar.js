import React from 'react';
import Button from 'react-bootstrap/Button';
import '../scss/style.scss';

const NavBar = ({ shuffle = () => {}, addPicture = () => {} }) => (
    <div className="navbar">
        <Button className="navbar-btn" onClick={shuffle}>
            Mélanger 
        </Button>
        <Button className="navbar-btn" onClick={addPicture}>
            Ajouter une images 
        </Button>
    </div>
);

export default NavBar;