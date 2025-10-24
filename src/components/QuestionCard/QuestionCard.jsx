import { Button } from '@components/Button';
import cls from './QuestionCard.module.css';

export const QuestionCard = () => {
	return (
		<div className={cls.card}>
			<div className={cls.cardLabels}>
				<div>Level: 1</div>
				<div>Not completed</div>
			</div>
			<h5 className={cls.cardTitle}>Some Header</h5>
			<div className={cls.cardAnswers}>
				<span>Short answer: </span>
				<p className={cls.cardAnswer}>
					Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
				</p>
			</div>
			<Button onClick={() => {}}>View</Button>
		</div>
	);
};
