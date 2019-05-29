import React from 'react';
import Board from './components/Board';
import NavBar from './components/NavBar';
import ModalPicture from './components/ModalPicture';
import {Image} from 'cloudinary-react';
import './scss/style.scss';

class Expo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [],
      modalPicture: ""
    }

    this.addPicture = this.addPicture.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.getClass = this.getClass.bind(this);
    this.zoom = this.zoom.bind(this);
    this.close_modal = this.close_modal.bind(this);
    this.getPics = this.getPics.bind(this);
    this.getDimensions = this.getDimensions.bind(this);

    this.getPics();
  }

  getPics() {
    fetch("images.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          pictures: data
        });
      });
  }

  zoom(index) {
    this.setState({
      modalPicture: this.state.pictures[index].name
    });
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  close_modal() {
    var modal = document.getElementById("myModal");
    modal.style.display = 'none';
  }

  shuffle() {
    const array = [];
    this.state.pictures.forEach(element => array.push(element));
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({
      pictures: array
    });
  }

  addPicture() {
    const choice = ["https://picsum.photos/200/200", "https://picsum.photos/400/200", "https://picsum.photos/200/400", "https://picsum.photos/400/400"]
    this.setState(state => {
      const pictures = state.pictures.concat(choice[Math.floor(Math.random() * 4)]);

      return {
        pictures
      };
    });
  }
  
  getDimensions() {
    const array = [];
    this.state.pictures.forEach(picture => {
      switch (picture.class) {
        case 'wide':
          array.push({
            name: picture.name,
            width: 400,
            rescale: "width"
          });
          break;
        case 'tall':
          array.push({
            name: picture.name,
            height: 400,
            rescale: "height"
          });
          break;
        case 'large':
            if (picture.height >= picture.width) {
              array.push({
                name: picture.name,
                height: 400,
                rescale: "height"
              });
            }
            else {
              array.push({
                name: picture.name,
                width: 400,
                rescale: "width"
              });
            }
            break;
        default:
          if (picture.height >= picture.width) {
            array.push({
              name: picture.name,
              height: 200,
              rescale: "height"
            });
          }
          else {
            array.push({
              name: picture.name,
              width: 200,
              rescale: "width"
            });
          }
          break;
      }
    });

    return array;
  }

  getClass() {
    const array = [];
    this.state.pictures.forEach(picture => {
      array.push(picture.class + " picture-container");
    });
    return array;
  }

  render () {
    return (
      <div>
        <NavBar shuffle={this.shuffle} addPicture={this.addPicture}/>
        <ModalPicture close={this.close_modal} picture={this.state.modalPicture}/>
        <div>
          <Board pictures={this.getDimensions()}  picturesClass={this.getClass()} onClick={this.zoom}/>
        </div>
      </div>
    );
  }
}

export default Expo;
