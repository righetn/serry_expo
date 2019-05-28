import React from 'react';
import '../scss/style.scss'

class Picture extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mouseOver: false,
        }
    }

    render() {
        return (
            <div className={this.props.pictureClass}>
                <img
                    className={this.state.mouseOver ? "pictureOver" : "picture"}
                    onMouseOver={() => this.setState({ mouseOver: true })}
                    onMouseOut={() => this.setState({ mouseOver: false })}
                    src={this.props.picture}
                    alt="Tableau"
                    >
                </img>
            </div>
        );
      }
}

export default Picture;