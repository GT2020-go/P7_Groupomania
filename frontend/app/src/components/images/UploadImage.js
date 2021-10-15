import React, { Component } from "react";

class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null, // to store selected file
      handleResponse: null, // handle the API response
      imageUrl: null, // to store uploaded image path
    };
  }

  // handle change event of input file
  onChangeFile = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  // handle click event of the upload button
  handleUpload = () => {
    console.log("selectedFile: ", this.state.selectedFile);
  };

  render() {
    const { handleResponse, imageUrl } = this.state;
    return (
      <div className="App">
        <h4>Image Upload in ReactJS - Clue Mediator</h4>

        <p className="title">Select Image:</p>
        <div style={{ marginBottom: 10 }}>
          <input type="file" onChange={this.onChangeFile} />
        </div>
        <input type="button" value="Upload" onClick={this.handleUpload} />
        {handleResponse && (
          <p className={handleResponse.isSuccess ? "success" : "error"}>
            {handleResponse.message}
          </p>
        )}

        <p className="title" style={{ marginTop: 30 }}>
          Uploaded Image:
        </p>
        {imageUrl && (
          <img src={imageUrl} alt="Uploaded File" height="100" width="100" />
        )}
      </div>
    );
  }
}

export default UploadImage;
