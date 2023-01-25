import { useSelector, useDispatch } from 'react-redux'

import styles from './Categories.module.scss'

import { setCategoryId } from '../../redux/slices/filterSlice';
import { RootState } from '../../redux/store';



const Categories: React.FC = () => {
    const categoryId = useSelector((state: RootState) => state.filter.categoryId);
    const dispatch = useDispatch();


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
                    onClick={() => dispatch(setCategoryId(index))}
                    className={categoryId === index ? styles.active : null}
                >
                    {category}
                </li>
            ))}
        </ul>
    )
}

export default Categories
