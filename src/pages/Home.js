import React from 'react';
import style from './Pages.module.css';

export default function Home() {
  return (
    <>
      <div className={style.homeContainer}>
        <h2 className={style.title}> Welcome to our page!</h2>
        <div>
          <p className={style.content}>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolorum ut molestiae animi
            itaque esse nulla veritatis sed earum officiis
            Lorem ipsum, dolor sit amet consectetur
            animi itaque esse nulla veritatis sed
            adipisicing elit. Dolorum ut molestiae animi
            adipisicing elit. Dolorum ut molestiae animi
            adipisicing elit. Dolorum ut molestiae animi
            adipisicing elit. Dolorum ut molestiae animi
            earum officiis culpa! Mollitia
          </p>
        </div>
      </div>
    </>
  );
}
