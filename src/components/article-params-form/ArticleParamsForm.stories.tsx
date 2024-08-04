import type { Meta, StoryObj } from '@storybook/react';

import { ArticleParamsForm } from './ArticleParamsForm';
import {Button} from "components/button";

const meta: Meta<typeof ArticleParamsForm> = {
	component: ArticleParamsForm,
};

export default meta;
type Story = StoryObj<typeof ArticleParamsForm>;

export const ArticleParamsFormStory: Story = {
	render: () => {
		return (
			<>
				<ArticleParamsForm />
			</>
		);
	},
};
