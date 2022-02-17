import React from 'react';
import style from './Pages.module.css';

export default function Quote() {
  return (
    <>
      <div className={style.homeContainer}>
        <h2 className={style.title}> Welcome to our page!</h2>
        <div>
          <p className={style.content}>
            Mathematics is not about number, equations, computations,
            or algorithms: it is about understanding. -Willian Paul Thurston
          </p>
        </div>
      </div>
    </>
  );
}
