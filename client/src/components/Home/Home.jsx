import React from 'react';
import Video from './newvideo.mp4';
import style from './Home.module.css';
function Home() {
  return (
    <div>
      <h1>ЭТО ГЛАВНАЯ СТРАНИЦА НАШЕГО САЙТА!</h1>
      <video autoPlay loop muted className={style.home}>
        <source src={Video} type='video/mp4' />
      </video>
    </div>
  );
}

export default Home;
