import React from 'react';
import {Image} from 'cloudinary-react';
import '../scss/style.scss';

const ModalPicture = ({ close = () => {}, picture = "" }) => (
    <div id="myModal" className="modal">
        <span className="close" onClick={close}>&times;</span>

        <Image className="modal-content" cloudName="hn5dy9tfe" publicId={picture}/>

        <div id="caption"></div>
    </div>
);

export default ModalPicture;