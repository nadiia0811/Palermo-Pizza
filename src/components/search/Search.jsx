import React, { useContext, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { AppContext } from '../../App';
import debounce  from 'lodash.debounce';
import styles from './search.module.scss';


export const Search = () => {
  const {searchValue, setSearchValue} = useContext(AppContext);  
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const updateSearchValue = React.useCallback(
        debounce((value) => setSearchValue(value), 2000), []); 

  const onChangeInput = (e) => {  
        setValue(e.target.value);
        updateSearchValue(e.target.value);     
  } 
 
  const onClickClear = () => {
    setValue('');
    setSearchValue('');
    inputRef.current.focus();
  }
  
  return (
    <div className={styles.root}>
        <FiSearch className={styles.icon} />
        <input 
              ref = { inputRef }
              className={styles.input}
              placeholder='Search pizza...' 
              value = {value}
              onChange = { onChangeInput } /> 
         <IoMdClose className = {styles.close}
                    onClick = { onClickClear }/>
    </div>   
  )
}

