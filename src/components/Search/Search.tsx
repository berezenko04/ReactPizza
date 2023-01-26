import { useDispatch } from 'react-redux'
import { useCallback, useRef, useState } from 'react'
import debounce from 'lodash.debounce'

import styles from './Search.module.scss'

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as CancelIcon } from '../../assets/icons/close.svg'
import { setSearchValue } from '../../redux/search/slice'


const Search: React.FC = () => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const updateSearchValue = useCallback(
        debounce((value) => {
            dispatch(setSearchValue(value));
        }, 500), []
    )

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current?.focus();
    }

    return (
        <div className={styles.inputBlock}>
            <SearchIcon className={styles.searchIcon} />
            <input
                ref={inputRef}
                type="text"
                placeholder='Поиск пиццы...'
                onChange={onChangeInput}
                value={value}
                maxLength={16}
            />
            {value &&
                <CancelIcon className={styles.cancelIcon} onClick={onClickClear} />}

        </div>
    )
}

export default Search
