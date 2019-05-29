import React from 'react';
import Board from './components/Board';
import NavBar from './components/NavBar';
import Modal_picture from './components/Modal_picture';
import Modal from 'react-bootstrap/Modal';
import './scss/style.scss';

class Expo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: ["https://picsum.photos/400/200", "https://picsum.photos/200/200", "https://picsum.photos/400/200",
      "https://picsum.photos/200/400", "https://picsum.photos/200/400", "https://picsum.photos/200/200", "https://picsum.photos/400/400",
      "https://picsum.photos/200/400", "https://picsum.photos/400/200", "https://picsum.photos/400/200", "https://picsum.photos/200/400"],
    }

    this.addPicture = this.addPicture.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.picturesClass = this.picturesClass.bind(this);
    this.zoom = this.zoom.bind(this);
    this.close_modal = this.close_modal.bind(this);
  }

  zoom(index) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");

    modalImg.src = this.state.pictures[index];
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
  
  picturesClass() {
    const array = [];
    this.state.pictures.forEach(picture => {
      let measure = picture.match(/\d+/g);
      
      if (measure[0] === "400" && measure[1] === "200")
        array.push("wide picture-container");
      else if (measure[0] === "200" && measure[1] === "400")
        array.push("tall picture-container");
      else if (measure[0] === "400" && measure[1] === "400")
        array.push("large picture-container");
      else
        array.push("normal picture-container");
    });

    return array;
  }

  render () {
    return (
      <div>
        <NavBar shuffle={this.shuffle} addPicture={this.addPicture}/>
        <Modal_picture close={this.close_modal}/>
        <div>
          <Board pictures={this.state.pictures} picturesClass={this.picturesClass()} onClick={this.zoom}/>
        </div>
      </div>
    );
  }
}

export default Expo;
