import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  
  return (
    <div className={styles.root}> 
      <h1>
        <img src="./emoji.png" width={40} 
             height={40} alt="Emoji" />
        <br/>
        Nothing found
      </h1>
      <p>Unfortunately, your search returned no results</p>
    </div> 
  )
}
