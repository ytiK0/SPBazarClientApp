import React, {FC} from 'react';
import styles from './shulkerdescrition.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";

const textareaConfig = {
	cols: 5,
	maxLength: 150,
	placeholder: "Здесь вы можете описать ваш шалкеровый ящик...",
	defaultLabel: "ShulkerTextArea"
}


export const ShulkerDescription: FC<{id?: string, label?: string}> = ({id = "description", label = textareaConfig.defaultLabel}) => {
	const {description} = useTypedSelector(state => state.shulker)
	const {setDescription} = useAction();
	
	const handleChange = ({target}: React.ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(target.value);
	}
	
	return (
		<div className={styles.formDescriptionInputContainer}>
			<label className={styles.formInputLabel} htmlFor={id}>{label}</label>
			<textarea className={styles.descriptionTextInput}
			          onChange={handleChange}
			          cols={textareaConfig.cols}
			          maxLength={textareaConfig.maxLength}
			          id={id}
			          value={description}
			          placeholder={textareaConfig.placeholder}
			          required/>
		</div>
	);
}
