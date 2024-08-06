import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import React, { SyntheticEvent, useState } from 'react';
import styles from './ArticleParamsForm.module.scss';
import { Select } from 'components/select';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import { CustomCSSProperties } from 'src/index';

interface ArticleParamsFormProps {
	onStyleChange: (styles: CustomCSSProperties) => void;
}

export const ArticleParamsForm: React.FC<ArticleParamsFormProps> = ({
	onStyleChange,
}) => {
	const [isContainerShown, setIsContainerShown] = useState(false);
	const toggleForm = () => {
		setIsContainerShown(!isContainerShown);
	};

	const [selectedFont, setSelectedFont] = useState(fontFamilyOptions[0]);
	const [selectedFontSize, setSelectedFontSize] = useState(fontSizeOptions[0]);
	const [selectedFontColor, setSelectedFontColor] = useState(fontColors[0]);
	const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
		backgroundColors[0]
	);
	const [selectedContentWidth, setSelectedContentWidth] = useState(
		contentWidthArr[0]
	);

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();

		console.log(selectedBackgroundColor);
		console.log(selectedContentWidth);

		console.log(selectedFontColor);

		console.log(selectedFont);

		console.log(selectedFontSize);

		onStyleChange({
			'--bg-color': selectedBackgroundColor.value,
			'--container-width': selectedContentWidth.value,
			'--font-color': selectedFontColor.value,
			'--font-family': selectedFont.value,
			'--font-size': selectedFontSize.value,
		});
	};

	const handleReset = () => {
		setSelectedFont(fontFamilyOptions[0]);
		setSelectedFontSize(fontSizeOptions[0]);
		setSelectedFontColor(fontColors[0]);
		setSelectedBackgroundColor(backgroundColors[0]);
		setSelectedContentWidth(contentWidthArr[0]);
	};

	return (
		<>
			<ArrowButton onClick={toggleForm} isShown={isContainerShown} />
			<aside
				className={`${styles.container} ${
					isContainerShown && styles.container_open
				}`}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<h2 className={styles.title}>Задайте параметры</h2>
					<Select
						selected={selectedFont}
						onChange={setSelectedFont}
						options={fontFamilyOptions}
						title='Шрифт'
					/>
					<RadioGroup
						selected={selectedFontSize}
						name='radio'
						onChange={setSelectedFontSize}
						options={fontSizeOptions}
						title='Размер шрифта'
					/>
					<Select
						selected={selectedFontColor}
						onChange={setSelectedFontColor}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={selectedBackgroundColor}
						onChange={setSelectedBackgroundColor}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Select
						selected={selectedContentWidth}
						onChange={setSelectedContentWidth}
						options={contentWidthArr}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
