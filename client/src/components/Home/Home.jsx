import React from 'react';
import Video from './newvideo.mp4';
import style from './Home.module.css';
function Home() {
  return (
    <div className={style.video_bg}>
      <h1>“I googled my symptoms… <br />turned out I just need to go camping”</h1>
      <video autoPlay loop muted className={style.home}>
        <source src={Video} type='video/mp4' />
      </video>
    </div>
  );
}

export default Home;
