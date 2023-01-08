import { useContext } from 'react'

import styles from './Search.module.scss'

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as CancelIcon } from '../../assets/icons/close.svg'
import AppContext from '../../Context'


const Search = () => {

    const { searchValue, setSearchValue } = useContext(AppContext);
    return (
        <div className={styles.inputBlock}>
            <SearchIcon className={styles.searchIcon} />
            <input
                type="text"
                placeholder='Поиск пиццы...'
                onChange={(event) => setSearchValue(event.target.value)}
                value={searchValue}
            />
            {searchValue &&
                <CancelIcon className={styles.cancelIcon} onClick={() => onChangeSearch('')} />}

        </div>
    )
}


export default Search
