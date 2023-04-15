import React, {FC, useState} from 'react';
import makeAnimated from "react-select/animated";
import {categoriesList} from "../../pages/Shop/Shop";
import Select, {StylesConfig} from "react-select";
import {Categories} from "../../components/Categories";
import {useAction} from "../../hooks/useAction";

export interface CategoriesOptions {
	value: string,
	label: string
}

export const ShulkerCategoriesSelect: FC = () => {
	const {setCategory} = useAction();

	const selectStyle: StylesConfig = {
		container: (styles, props) => {
			return {...styles, marginTop: 9}
		},
		control: (styles) => {
			return {...styles, background: "#373737", borderColor: "#9F9F9F"}
		},
		option: (styles, state) => {
			state.isFocused
			return {...styles, background: state.isFocused ? "#8F8F8F" : styles.background}
		},
		menu: (styles) => {
			return {
				...styles,
				margin: 0,
				background: "#373737",
				borderWidth: ["2px", "2px", "0px", "2px"],
				borderStyle: "solid",
				borderColor: "#00778F",
				borderRadius: ["15px", "15px", "0px", "0px"]
			}
		},
		singleValue: (style) => {
			return {...style, color: "white"}
		},
		indicatorsContainer: (styles) => {
			return {...styles}
		}
	}

	return (
		<div>
			<h3 className={"heading2"}>Категории</h3>
			<Select
				styles={selectStyle}
				menuPlacement={"top"}
				closeMenuOnSelect={true}
				components={makeAnimated()}
				options={categoriesList}
				isClearable={true}
				onChange={newValue => setCategory(newValue as CategoriesOptions)}
			/>
		</div>
	);
}
