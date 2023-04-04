import React from 'react';
import {Header} from "../../components/Header";
import {Categories} from "../../components/Categories";
import styles from "./shop.css";
import {ShopBody} from "../../modules/ShopBody";

export const categoriesList = [{value: "blocks" , label: 'Блоки'},
	{value: "armor" , label: 'Броня'},
	{value: "food" , label: 'Еда'},
	{value: "equipment" , label: 'Инструменты'}];

const Shop = () => {
	return (
		<>
			<Header />
			<main className={`container ${styles.shopMain}`}>
				<Categories categories={categoriesList.map(item => item.label)}/>
				<ShopBody />
			</main>
		</>
	);
};

export default Shop;