import React from 'react';
import styles from './search.module.scss';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { AppContext } from '../../App';
import { useRef } from 'react';
import debounce  from 'lodash.debounce';


export function Search() {
  const {setSearchValue} = React.useContext(AppContext);  //value = searchValue
  const [value, setValue] = React.useState('');
  const inputRef = useRef();

  const updateSearchValue = React.useCallback(
        debounce((val) => setSearchValue(val), 2000), []); 

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

