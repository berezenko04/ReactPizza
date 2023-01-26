import { useEffect, useRef, useState, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styles from './Sort.module.scss'

import { ReactComponent as SortIcon } from '../../assets/icons/arrow-top.svg'
import { setSortType } from '../../redux/filter/slice'
import { sortTypeSelector } from '../../redux/filter/selectors'


export type SortItem = {
    name: string,
    sortProperty: 'rating' | 'title' | 'price',
    orderProperty: 'desc' | 'asc'
};

export const sortList: SortItem[] = [
    { name: 'популярности ↓', sortProperty: 'rating', orderProperty: 'desc' },
    { name: 'популярности ↑', sortProperty: 'rating', orderProperty: 'asc' },
    { name: 'цене ↓', sortProperty: 'price', orderProperty: 'desc' },
    { name: 'цене ↑', sortProperty: 'price', orderProperty: 'asc' },
    { name: 'алфавиту ↓', sortProperty: 'title', orderProperty: 'desc' },
    { name: 'алфавиту ↑', sortProperty: 'title', orderProperty: 'asc' }
];


const SortPopup: React.FC = memo(() => {

    const sortType = useSelector(sortTypeSelector);
    const dispatch = useDispatch();
    const sortRef = useRef<HTMLDivElement>(null);
    const [isOpened, setIsOpened] = useState(false);

    const handleCategoryClick = (obj: SortItem) => {
        dispatch(setSortType(obj));
        setIsOpened(false);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
                setIsOpened(false);
            }
        }

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        }
    }, [])

    return (
        <div ref={sortRef} className={styles.sort}>
            <div className={styles.sort__label}>
                <SortIcon className={`${styles.sortIcon} ${isOpened && styles.sortIcon__active}`} />
                <b>Сортировка по:</b>
                <span onClick={() => setIsOpened(!isOpened)}>{sortType.name}</span>
            </div >

            <div className={`${styles.sort__popup} ${isOpened && styles.sort__popup__active}`}>
                <ul>
                    {sortList.map((obj, index) => (
                        <li
                            key={index}
                            className={sortType.name === sortList[index].name ? styles.active : null}
                            onClick={() => handleCategoryClick(obj)}
                        >
                            {obj.name}
                        </li>
                    ))}
                </ul >
            </div >
        </div >
    )
})



export default SortPopup
