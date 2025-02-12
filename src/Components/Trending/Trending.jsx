import React, { useEffect, useState } from 'react';
import './Trending.css';

const Trending = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageData = [
      { id: 1, url: '' },
      { id: 2, url: '' },
      { id: 3, url: '' },
      { id: 4, url: '' },
      { id: 5, url: '' },
      { id: 6, url: '' },
      { id: 7, url: '' },
      { id: 8, url: '' },
      { id: 9, url: '' },
      { id: 10, url: '' }
    ];
    setImages(imageData);
  }, []);

  return (
    <div className="trending-container">
      <h2>Trending Movies</h2>
      <div className="image-slider">
        {images.map((image) => (
          <img key={image.id} src={image.url} alt="Trending" className="trending-image" />
        ))}
      </div>
    </div>
  );
};

export default Trending;
