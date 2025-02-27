import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardOwnerNameInput from 'src/steps/add-card-form/CardOwnerNameInput';
import { AutoFocusWrapperWithSelectToForm } from 'src/components/utils/Wrapper';
import { renderWithAddCardMachineProvider } from 'src/utils/render';

const setup = () => {
	const cardOwnerNameInput = screen.getByTestId<HTMLInputElement>('card-owner-name');

	return {
		cardOwnerNameInput,
	};
};

describe('카드 소유자 입력', () => {
	beforeEach(() => {
		renderWithAddCardMachineProvider(
			<AutoFocusWrapperWithSelectToForm>
				<CardOwnerNameInput />
			</AutoFocusWrapperWithSelectToForm>,
		);
	});

	it('"카드에 표시된 이름과 동일하게 입력하세요." 라는 placeholder가 표시된다.', async () => {
		const { cardOwnerNameInput } = setup();

		expect(cardOwnerNameInput.placeholder).toBe('카드에 표시된 이름과 동일하게 입력하세요.');
	});

	it('최대 입력 길이 보다 긴 입력값은 무시된다.', async () => {
		const { cardOwnerNameInput } = setup();

		await userEvent.type(cardOwnerNameInput, '1'.repeat(cardOwnerNameInput.maxLength + 3));

		expect(cardOwnerNameInput.value).toBe('1'.repeat(cardOwnerNameInput.maxLength));
	});

	it('입력한 값의 길이가 상단 라벨에 표시된다.', async () => {
		const { cardOwnerNameInput } = setup();

		await userEvent.type(cardOwnerNameInput, '1234');

		const label = screen.queryByText(`${cardOwnerNameInput.value.length} / ${cardOwnerNameInput.maxLength}`);

		expect(label).not.toBeNull();
	});
});
