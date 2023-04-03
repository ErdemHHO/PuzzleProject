import React, { useState } from 'react';
import axios from 'axios';
import * as api from "../api/index";

const PhotoForm = () => {
  const [fileName, setFileName] = useState(null);
  console.log(fileName)

  const handlePhotoChange = (event) => {
    setFileName(event.target.files[0]);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("fileName", fileName);
    console.log(formData);
    await api.createPuzzle(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handlePhotoChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default PhotoForm;
