import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useRef, useState } from 'react'
import debounce from 'lodash.debounce'

import styles from './Search.module.scss'

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as CancelIcon } from '../../assets/icons/close.svg'
import { setSearchValue } from '../../redux/slices/searchSlice'




const Search = () => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const inputRef = useRef();

    const updateSearchValue = useCallback(
        debounce((value) => {
            dispatch(setSearchValue(value));
        }, 500), []
    )

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current.focus();
    }


    return (
        <div className={styles.inputBlock}>
            <SearchIcon className={styles.searchIcon} />
            <input
                ref={inputRef}
                type="text"
                placeholder='Поиск пиццы...'
                onChange={value.length > 16 ? '' : onChangeInput}
                value={value}
            />
            {value &&
                <CancelIcon className={styles.cancelIcon} onClick={onClickClear} />}

        </div>
    )
}




export default Search
