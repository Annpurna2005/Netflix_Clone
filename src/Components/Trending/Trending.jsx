import React, { useEffect, useState } from 'react';
import './Trending.css';

const Trending = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageData = [
      { id: 1, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTssisZD9QjHzbHm9cAET_KUoI-kO5JtTp1Wg&s' },
      { id: 2, url: 'https://www.tallengestore.com/cdn/shop/products/Padmaavat-DeepikaPadukone-BollywoodHindiMoviePosters_5c0201d3-f114-4be3-b614-05bfe745dfdd_large.jpg?v=1625220944' },
      { id: 3, url: 'https://m.media-amazon.com/images/I/91GONzCyOcL.jpg' },
      { id: 4, url: 'https://i.redd.it/i-really-like-hindi-movie-posters-that-are-written-in-v0-7ewvg4yz307e1.jpg?width=1080&format=pjpg&auto=webp&s=c656c72bdbd127ea05b53261ba99439cc99e82c4' },
      { id: 5, url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsotDr7HgOVaLCNyoH1NIv1SEZsmOMAFkK8zZYYtxg4irqLQyFa5y5583eJnLoALEgeouwfydkRekTBgopFca2TZ1lRn9xXfdV4gx5LXhwQGg8Ez6AOIaLDhwoooRFIdVvq1Ueo_EaYnvF/s1600/amavas-hindi-movie-poster.jpg' },
      { id: 6, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1wfVgivgSKY4icB6wBm14tDrflO58v8Rag&s' },
      { id: 7, url: 'https://motivatevalmorgan.com/wp-content/uploads/2018/02/Love-Aaj-Kal-Hindi-Movie-Poster.jpg' },
      { id: 8, url: 'https://m.media-amazon.com/images/I/91uSkUMWc+L._AC_UF350,350_QL50_.jpg' },
       { id: 9, url: 'https://i.redd.it/i-really-like-hindi-movie-posters-that-are-written-in-v0-d66qjjo0407e1.jpg?width=350&format=pjpg&auto=webp&s=3d3772850381d7c463cfb8aadde4d8130f4ac5d7' }
      // { id: 10, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9gHxWXNMUr3lMJr4W8rWpVh6vwyjriJ6bQ&s' }
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
