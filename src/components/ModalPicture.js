import React from 'react';
import '../scss/style.scss';

const ModalPicture = ({ close = () => {} }) => (
    <div id="myModal" className="modal">
        <span className="close" onClick={close}>&times;</span>

        <img className="modal-content" id="img01" alt="truc" />

        <div id="caption"></div>
    </div>
);

export default ModalPicture;