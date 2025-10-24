import { useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';
import cls from './QuestionCard.module.css';

export const QuestionCard = ({ card }) => {
	const { id, level, completed, description, question, answer } = card;
	const navigate = useNavigate();

	return (
		<div className={cls.card}>
			<div className={cls.cardLabels}>
				<div>Level: {level}</div>
				<div>{completed ? 'Completed' : 'Not completed'}</div>
			</div>
			<h5 className={cls.cardTitle}>{question}</h5>
			<div className={cls.cardAnswers}>
				<label>Short answer: {id}</label>
				<p className={cls.cardAnswer}>{answer}</p>
			</div>
			<Button onClick={() => navigate(`/question/:${id}`)}>View</Button>
		</div>
	);
};
