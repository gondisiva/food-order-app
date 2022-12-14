import React from 'react';
import mealsImage from '../../assets/meals.jpg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return(
        <React.Fragment>
            <header className={styles.header}>
                <h1>Meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt='Delicious food'/>
            </div>
        </React.Fragment>
    )
}

export default Header;
