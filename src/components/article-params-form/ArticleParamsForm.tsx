import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { OnClick } from 'components/arrow-button/ArrowButton';

export const ArticleParamsForm = () => {
	const [isContainerShown, setIsContainerShown] = useState(false);
	const toggleForm: OnClick = () => {
		setIsContainerShown(!isContainerShown);
	};
	return (
		<>
			<ArrowButton onClick={toggleForm} isShown={isContainerShown} />
			<aside
				className={`${styles.container} ${
					isContainerShown && styles.container_open
				}`}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
