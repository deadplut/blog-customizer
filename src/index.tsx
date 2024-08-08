import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import { defaultArticleState, OptionType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

export interface CustomCSSProperties extends CSSProperties {
	'--bg-color'?: string | OptionType;
	'--container-width'?: string | OptionType;
	'--font-color'?: string | OptionType;
	'--font-family'?: string | OptionType;
	'--font-size'?: string | OptionType;
}

const App = () => {
	const [articleStyles, setArticleStyles] = useState<CustomCSSProperties>({
		'--bg-color': defaultArticleState.backgroundColor.value,
		'--container-width': defaultArticleState.contentWidth.value,
		'--font-color': defaultArticleState.fontColor.value,
		'--font-family': defaultArticleState.fontFamilyOption.value,
		'--font-size': defaultArticleState.fontSizeOption.value,
	});

	const handleArticleStylesChange = (updatedStyles: CustomCSSProperties) => {
		setArticleStyles((prevStyles) => ({
			...prevStyles,
			...updatedStyles,
		}));
	};

	return (
		<div className={clsx(styles.main)} style={articleStyles}>
			<ArticleParamsForm onStyleChange={handleArticleStylesChange} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
