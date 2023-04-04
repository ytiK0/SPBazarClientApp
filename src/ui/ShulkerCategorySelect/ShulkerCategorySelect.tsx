import React, {FC} from 'react';
import makeAnimated from "react-select/animated";
import {categoriesList} from "../../pages/Shop/Shop";
import Select, {StylesConfig} from "react-select";

export const ShulkerCategoriesSelect: FC = () => {
	const selectStyle: StylesConfig = {
		container: (styles, props) => {
			return {...styles, marginTop: 10}
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
				background: "#363636",
				borderWidth: ["2px", "2px", "0px", "2px"],
				borderStyle: "solid",
				borderColor: "#00778F",
				borderRadius: ["15px", "15px", "0px", "0px"]
			}
		},

		indicatorsContainer: (styles) => {
			return {display: "none"}
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
				isMulti
				options={categoriesList}
			/>
		</div>
	);
}
