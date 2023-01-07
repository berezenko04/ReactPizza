import PropTypes from 'prop-types'

import styles from './Search.module.scss'


const Search = ({ searchValue, onChangeSearch }) => {
    return (
        <div className={styles.inputBlock}>
            <input
                type="text"
                placeholder='Поиск пиццы...'
                onChange={(event) => onChangeSearch(event.target.value)}
                value={searchValue}
            />
        </div>
    )
}

Search.propTypes = {
    searchValue: PropTypes.string,
    onChangeSearch: PropTypes.func
}

export default Search
