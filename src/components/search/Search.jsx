import React from 'react';
import styles from './search.module.scss';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

export function Search({ searchValue, setSearchValue }) {
  
  return (
    <div className={styles.root}>
        <FiSearch className={styles.icon} />
        <input className={styles.input}
               placeholder='Search pizza...' 
               value = {searchValue}
               onChange = {(e) => setSearchValue(e.target.value)} /> 
         <IoMdClose className = {styles.close}
                    onClick = {() => setSearchValue('')}/>
    </div>
    
  )
}

