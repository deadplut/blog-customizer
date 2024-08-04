import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import React from 'react';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;
type ArrowButtonProps = {
	isShown: boolean;
	onClick?: OnClick;
};
export const ArrowButton: React.FC<ArrowButtonProps> = ({
	isShown,
	onClick,
}) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container} ${isShown && styles.container_open}`}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${styles.arrow} ${isShown && styles.arrow_open}`}
			/>
		</div>
	);
};
