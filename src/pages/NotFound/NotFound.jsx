import { Link } from 'react-router-dom'

import styles from './NotFound.module.scss'

import Header from '../../components/Header/Header'
import Pepe from '../../assets/img/pepe.webp'


const NotFound = () => {
    return (
        <>
            <Header />
            <div className={styles.notFound}>
                <div className="container">
                    <div className={styles.notFound__wrapper}>
                        <div className={styles.notFound__content}>
                            <div className={styles.notFound__content__text}>
                                <h2>Oops...</h2>
                                <p>Похоже, мы не можем найти нужную вам страницу.</p>
                            </div>
                            <img src={Pepe} alt="404" />
                        </div>
                        <Link to='/' className={styles.notFound__button}>Вернутьcя назад</Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default NotFound
