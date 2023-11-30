import React, { Component, Fragment } from 'react';
import './tech.css';

class Techs extends Component {
  state = {
    images: [],
  };

  loadImage = (imageName) => {
    import(`./logostech/${imageName}.png`).then((image) => {
      this.setState((prevState) => ({
        images: [...prevState.images, image.default],
      }));
    });
  };

  componentDidMount() {
    // Array of image names to load
    const imageNames = Array.from({ length: 12 }, (_, index) => `${index + 1}`);

    // Load images using loadImage for each image name
    imageNames.forEach((imageName) => {
      this.loadImage(imageName);
    });
  }

  render() {
    const { images } = this.state;
    return (
      <Fragment>
        <div className="image-container">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Techs;

