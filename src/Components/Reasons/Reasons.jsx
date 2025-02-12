import React from 'react';
import './Reasons.css';

const data = [
  {
    title: 'Enjoy on your TV',
    description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
    image: 'https://e7.pngegg.com/pngimages/676/866/png-clipart-panasonic-led-backlit-lcd-high-definition-television-1080p-smart-tv-smart-tv-purple-television-thumbnail.png'
  },
  {
    title: 'Download your shows to watch offline',
    description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
    image: 'https://cdn2.iconfinder.com/data/icons/gradient-purple-navigation-and-transactional-for-w/40/down-purp-512.png'
  },
  {
    title: 'Watch everywhere',
    description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
    image: 'https://img.freepik.com/free-vector/binoculars-concept-illustration_114360-24064.jpg?semt=ais_hybrid'
  },
  {
    title: 'Create profiles for kids',
    description: 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpjxLQx10lx95VuX7ZsbcbCzWsu1Tyg-Xeg&s'
  }
];

const Reasons = () => {
  return (
    <div className="reasons-container">
      {data.map((item, index) => (
        <div className="reason-box" key={index}>
          <h2>{item.title}</h2>
          <h6>{item.description}</h6>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Reasons;
