import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM_MUTATION } from '../utils/mutations'; // Import your mutation

const Admin = () => {
  const [formData, setFormData] = useState({
    _id: '', // You might generate this dynamically or let the server handle it.
    description: '',
    category: '',
    mainPicture: null,
    secondaryPictures: [],
  });

  const [addItem] = useMutation(ADD_ITEM_MUTATION);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    if (name === 'mainPicture') {
      setFormData({ ...formData, mainPicture: e.target.files[0] });
    } else if (name === 'secondaryPictures') {
      setFormData({ ...formData, secondaryPictures: Array.from(e.target.files) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert files to base64 or upload them to a server and get URLs.
    const mainImageBase64 = await convertFileToBase64(formData.mainPicture);
    const secondaryImagesBase64 = await Promise.all(
      formData.secondaryPictures.map((file) => convertFileToBase64(file))
    );

    try {
      const { data } = await addItem({
        variables: {
          _id: formData._id,
          mainImage: mainImageBase64,
          secondaryImages: secondaryImagesBase64,
          description: formData.description,
          category: formData.category,
        },
      });

      if (data) {
        alert('Item added successfully!');
        console.log('Added item:', data.addItem);
      }
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Failed to add item.');
    }
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="_id" placeholder="ID" onChange={handleInputChange} required />
      <input type="text" name="description" placeholder="Description" onChange={handleInputChange} required />
      <input type="text" name="category" placeholder="Category" onChange={handleInputChange} required />
      <input type="file" name="mainPicture" onChange={handleFileChange} required />
      <input type="file" name="secondaryPictures" multiple onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Admin;

