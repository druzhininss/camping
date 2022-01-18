import React from 'react';
import Video from './video.mp4';

function Home() {
  return (
    <div>
      <h1>ЭТО ГЛАВНАЯ СТРАНИЦА НАШЕГО САЙТА!</h1>
      <video autoPlay loop muted>
        <source src={Video} type='video/mp4' />
      </video>
    </div>
  );
}

export default Home;
