import { useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';
import { Badge } from '@components/Badge';
import cls from './QuestionCard.module.css';

export const QuestionCard = ({ card }) => {
	const { id, level, completed, description, question, answer } = card;
	const navigate = useNavigate();
	const levelVariant = level === 1 ? 'primary' : level === 2 ? 'warning' : 'alert';
	const completedVariant = completed ? 'succes' : 'primary'

	return (
		<div className={cls.card}>
			<div className={cls.cardLabels}>
				<Badge variant={levelVariant}>Level: {level}</Badge>
				<Badge variant={completedVariant}>{completed ? 'Completed' : 'Not completed'}</Badge>
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
