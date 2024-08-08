import { Text } from 'components/text';

import styles from './Button.module.scss';
import React from 'react';

type buttonProps = {
	title: string;
	onClick?: () => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	onReset?: () => void;
};

export const Button = ({ title, onClick, type, onReset }: buttonProps) => {
	return (
		<button
			className={styles.button}
			type={type}
			onClick={onClick}
			onReset={onReset}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
