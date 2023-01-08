import { useContext } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss'

import AppContext from '../../Context';

const Pagination = () => {

    const { setCurrentPage } = useContext(AppContext);

    return (
        <ReactPaginate
            className={styles.paginate}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => setCurrentPage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination
