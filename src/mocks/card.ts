import { createMachine } from 'xstate';
import { CardInfoWithId } from 'src/types/card.type';
import { addCardMachine, initialCardInfo } from 'src/machines/addCardMachine';

export const MOCK_CARD_INFO_LIST: CardInfoWithId[] = [
	{
		id: '1',
		cardNumberFirstSegment: '1234',
		cardNumberSecondSegment: '5678',
		cardNumberThirdSegment: '1234',
		cardNumberFourthSegment: '5678',
		cardOwnerName: '김포코',
		cardExpirationDate: '12 / 24',
		cardPasswordFirstDigit: '1',
		cardPasswordSecondDigit: '2',
		cardSecurityCode: '123',
		cardNickname: '포코 카드',
		cardCompanyCode: 'poco',
	},
	{
		id: '2',
		cardNumberFirstSegment: '1234',
		cardNumberSecondSegment: '5678',
		cardNumberThirdSegment: '1234',
		cardNumberFourthSegment: '5678',
		cardOwnerName: '김준',
		cardExpirationDate: '12 / 24',
		cardPasswordFirstDigit: '1',
		cardPasswordSecondDigit: '2',
		cardSecurityCode: '123',
		cardNickname: '준 카드',
		cardCompanyCode: 'jun',
	},
	{
		id: '3',
		cardNumberFirstSegment: '1234',
		cardNumberSecondSegment: '5678',
		cardNumberThirdSegment: '1234',
		cardNumberFourthSegment: '5678',
		cardOwnerName: '김현석',
		cardExpirationDate: '12 / 24',
		cardPasswordFirstDigit: '1',
		cardPasswordSecondDigit: '2',
		cardSecurityCode: '123',
		cardNickname: '현석카드',
		cardCompanyCode: 'seok',
	},
	{
		id: '4',
		cardNumberFirstSegment: '1234',
		cardNumberSecondSegment: '5678',
		cardNumberThirdSegment: '1234',
		cardNumberFourthSegment: '5678',
		cardOwnerName: '김윤호',
		cardExpirationDate: '12 / 24',
		cardPasswordFirstDigit: '1',
		cardPasswordSecondDigit: '2',
		cardSecurityCode: '123',
		cardNickname: '윤호카드',
		cardCompanyCode: 'yoon',
	},
	{
		id: '5',
		cardNumberFirstSegment: '1234',
		cardNumberSecondSegment: '5678',
		cardNumberThirdSegment: '1234',
		cardNumberFourthSegment: '5678',
		cardOwnerName: '김환오',
		cardExpirationDate: '12 / 24',
		cardPasswordFirstDigit: '1',
		cardPasswordSecondDigit: '2',
		cardSecurityCode: '123',
		cardNickname: '환오카드',
		cardCompanyCode: 'hwan',
	},
];

export const mockCardListMachine = createMachine(
	{
		...addCardMachine.config,
		context: {
			cardInfo: { ...initialCardInfo },
			cardList: MOCK_CARD_INFO_LIST,
			selectedCard: { ...initialCardInfo, id: '' },
		},
	},
	{ actions: { ...addCardMachine.implementations.actions } },
);

export const mockCardInfoMachine = createMachine(
	{
		...addCardMachine.config,
		context: {
			cardInfo: { ...MOCK_CARD_INFO_LIST[0] },
			cardList: [],
			selectedCard: { ...initialCardInfo, id: '' },
		},
	},
	{ actions: { ...addCardMachine.implementations.actions }, guards: { ...addCardMachine.implementations.guards } },
);
