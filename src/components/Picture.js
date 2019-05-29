import React from 'react';
import {Image} from 'cloudinary-react';
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
                {this.props.picture.rescale === "height" ?
                    <Image cloudName="hn5dy9tfe" publicId={this.props.picture.name} height={this.props.picture.height} crop="scale"
                        className={this.state.mouseOver ? "pictureOver" : "picture"}
                        onMouseOver={() => this.setState({ mouseOver: true })}
                        onMouseOut={() => this.setState({ mouseOver: false })}
                        onClick={this.props.onClick}
                    /> :
                    <Image cloudName="hn5dy9tfe" publicId={this.props.picture.name} width={this.props.picture.width} crop="scale"
                        className={this.state.mouseOver ? "pictureOver" : "picture"}
                        onMouseOver={() => this.setState({ mouseOver: true })}
                        onMouseOut={() => this.setState({ mouseOver: false })}
                        onClick={this.props.onClick}
                    />
                }
            </div>
        );
      }
}

export default Picture;