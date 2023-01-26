import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux'


import styles from './Categories.module.scss'

import { setCategoryId } from '../../redux/slices/filterSlice';
import { RootState } from '../../redux/store';
import { useCallback } from 'react';



const Categories: React.FC = memo(() => {


    const categoryId = useSelector((state: RootState) => state.filter.categoryId);
    const dispatch = useDispatch();

    const handleChangeCategory = useCallback((id: number) => {
        dispatch(setCategoryId(id));
    }, [])


    const categories = [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые'
    ];

    return (
        <ul className={styles.categories}>
            {categories.map((category, index) => (
                <li
                    key={index}
                    onClick={() => handleChangeCategory(index)}
                    className={categoryId === index ? styles.active : null}
                >
                    {category}
                </li>
            ))}

        </ul>
    )
})


export default Categories
