import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';

import styles from './Pagination.module.scss'
import { setCurrentPage } from '../../redux/slices/filterSlice';


const Pagination = () => {

    const dispatch = useDispatch();

    return (
        <ReactPaginate
            className={styles.paginate}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination
