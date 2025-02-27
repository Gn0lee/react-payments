import type { Meta, StoryObj } from '@storybook/react';

import AddCardStepperComponent from 'src/steps/AddCardStepper';
import { AddCardMachineDecorator } from 'src/stories/Decorators';

const meta: Meta<typeof AddCardStepperComponent> = {
	title: 'step/AddCardStepper',
	component: AddCardStepperComponent,
	decorators: [AddCardMachineDecorator],
};

export default meta;

type Story = StoryObj<typeof AddCardStepperComponent>;

export const AddCardStepper: Story = {
	render: () => {
		return <AddCardStepperComponent />;
	},
};
