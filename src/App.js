import React, { useState } from 'react';
import './App.css';

const Clairvoyance = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [processType, setProcessType] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const videoDuration = 10; // Max duration in minutes
        // Check if file is a video and length is within limit
        if (file && file.type.startsWith('video/')) {
            // Here you would typically check the video duration using a video library
            // For now, we assume it's valid for the example
            setVideoFile(file);
        } else {
            alert('Please upload a valid video file.');
        }
    };

    const handleProcess = () => {
        if (!videoFile) {
            alert('Please upload a video file first.');
            return;
        }
        // Perform the selected process
        switch (processType) {
            case 'OCR':
                // Call OCR processing function here
                console.log('Processing OCR...');
                break;
            case 'Face Recognition':
                // Call Face Recognition processing function here
                console.log('Processing Face Recognition...');
                break;
            case 'Object Detection':
                // Call Object Detection processing function here
                console.log('Processing Object Detection...');
                break;
            case 'Anomaly Detection':
                // Call Anomaly Detection processing function here
                console.log('Processing Anomaly Detection...');
                break;
            default:
                alert('Please select a processing type.');
                break;
        }
    };

    return (
        <div className="clairvoyance-container">
            <h1>Clairvoyance: 01</h1>
            <div className="button-container">
                <button onClick={() => setProcessType('OCR')}>OCR</button>
                <button onClick={() => setProcessType('Face Recognition')}>Face Recognition</button>
                <button onClick={() => setProcessType('Object Detection')}>Object Detection</button>
                <button onClick={() => setProcessType('Anomaly Detection')}>Anomaly Detection</button>
            </div>
            <div className="upload-area">
                <input type="file" accept="video/*" onChange={handleFileChange} />
                <button onClick={handleProcess}>Upload</button>
                <p>Upload only video up to 10 min. Media Type: Video</p>
            </div>
        </div>
    );
};

export default Clairvoyance;