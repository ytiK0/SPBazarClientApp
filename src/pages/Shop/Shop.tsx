import React from 'react';
import {Header} from "../../components/Header";
import {Categories} from "../../components/Categories";
import styles from "./shop.css";
import {ShopBody} from "../../modules/ShopBody";

const Shop = () => {
	return (
		<>
			<Header />
			<main className={`container ${styles.shopMain}`}>
				<Categories categories={["Блоки", "Броня", "Еда", "Инструменты"]}/>
				<ShopBody />
			</main>
		</>
	);
};

export default Shop;