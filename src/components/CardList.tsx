import { useAddCardMachineActor } from 'src/state/addCardMachine.ts';

export default function CardList() {
	const [state, send] = useAddCardMachineActor();

	const handleClickAddCard = () => {
		send({ type: 'ADD_CARD' });
	};

	if (state.matches('select')) {
		return (
			<div>
				<h2 className="page-title mb-10" data-testid="card-select">
					보유 카드
				</h2>
				<button onClick={handleClickAddCard} data-testid="add-card-button">
					카드 추가하기
				</button>
			</div>
		);
	}

	return null;
}
