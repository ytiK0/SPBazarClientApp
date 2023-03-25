import {ShulkerView} from "../store/reducers/shopReducer/shopReducerTypes";
import {ShulkerCellProps} from "../store/reducers/shulkerReduser/shulkerReduserTypes";

const isTitleValid = (title: string) => {
	return title.length > 0
}

const isDescriptionValid = (description: string) => {
	return description.length > 0
}

const isCellsValid = (cells: ShulkerCellProps[]) => {
	for (const cell of cells){
		if (cell.isEmpty)
			continue
		console.log(cell)
		if (cell.itemIconName == "Barrier.png")
			return false

		// else if (cell.count == 0 || cell.count != null)
		// 	return false
	}
	return true;
}

const isPriceValid = (price: number) => {
	return price > 0;
}

export const IsShulkerValid = (shulker: ShulkerView) => {
	if (!isTitleValid(shulker.title))
		return [false, "Укажите название шалкера"];
	else if (!isDescriptionValid(shulker.description))
		return [false, "Укажите описание"];
	else if (!isPriceValid(shulker.price))
		return [false, "Укажите цену"];
	else if (!isCellsValid(shulker.cells))
		return [false, "Содержимое шалкера невлидно!"]
	return [true, "OK"];
}