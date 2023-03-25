import React, {FC} from 'react';
import styles from './categories.css';

export const Categories: FC<{categories: string[]}> = ({categories}) => {
  return (
	  <div className={styles.categories}>
		  <h3 className={styles.categoriesHead}>Категории</h3>
		  <ul className={styles.categoriesList}>
			  {categories.map((category, index) =>
				  <li className={styles.categoriesItem} key={index}>
					  <a href={"#"} className={styles.categoriesItemLink}>{category}</a>
				  </li>)}
		  </ul>
	  </div>
  );
}
