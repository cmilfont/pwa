import React from 'react';
import Webcam from 'react-webcam';

class PhotoUpload extends React.PureComponent {

    state = {
        openCamera: false,
        photo: null,
    }

    toggleCamera = (photo) => this.setState({
        openCamera: !this.state.openCamera,
        photo,
    })

    onSave = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.toggleCamera(imageSrc);
    }

    setCamera = (webcam) => {
        this.webcam = webcam;
    }

    render() {
        const { openCamera, photo } = this.state;

        const style = {
            width: '200px',
            height: '200px',
        };
        if (photo) {
            style.background = `url(${photo}) no-repeat center center`;
            style.backgroundSize = 'cover';
        }

        const camera = openCamera ? 
            <Webcam ref={this.setCamera} audio={false} /> : 
            <div className="photo" style={style} />;
        const savePhoto = openCamera ? <button onClick={this.onSave}>Save</button>: null;

        return (
            <div>
                <button onClick={this.toggleCamera}>Abrim Cam</button>
                {savePhoto}
                {camera}
            </div>
        )
    }
}

export default PhotoUpload;