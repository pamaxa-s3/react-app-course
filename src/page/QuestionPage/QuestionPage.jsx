import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { Badge } from '@components/Badge'
import { Button } from '@components/Button'
import cls from './QuestionPage.module.css'
import { useId, useState } from 'react';

export const QuestionPage = () => {
	const { questions } = useLoaderData();
	const params = useParams();
	const cardId = params.id - 1;
	console.log('cardId: ', cardId);
	console.log('id: ', questions.data[cardId]?.id);
	const navigate = useNavigate();
	const levelVariant = () => (questions?.data[cardId]?.level === 1 ? 'primary' : questions?.data[cardId]?.level === 2 ? 'warning' : 'alert');
	const completedVariant = () => (questions?.data[cardId]?.completed ? 'succes' : 'primary');
	const checkboxId = useId();
	const [isChecked, setIsChecked] = useState(false);

	function onCheckboxChangeHandler(e) {
		setIsChecked(e.target.checked)
	}

	return (
		<div className={cls.container}>
			<div className={cls.cardLabels}>
				<Badge variant={levelVariant()}>Level: {questions?.data[cardId]?.level}</Badge>
				<Badge variant={completedVariant()}>{questions?.data[cardId]?.completed ? 'Completed' : 'Not completed'}</Badge>

				{questions?.data[cardId]?.editDate && <p className={cls.editDate}>Edited: {questions?.data[cardId]?.editDate}</p>}
			</div>
			<h5 className={cls.cardTitle}>{questions?.data[cardId]?.question}</h5>
			<p className={cls.cardDescription}>{questions?.data[cardId]?.description}</p>

			<div className={cls.cardAnswers}>
				<label>Short answer: {questions?.data[cardId]?.id}</label>
				<p className={cls.cardAnswer}>{questions?.data[cardId]?.answer}</p>
			</div>

			<ul className={cls.cardLinks}>
				Resources:
				{questions?.data[cardId]?.resources.map((link, i) => (
					<li key={i}>
						<Link to={link.trim()} target='_blank' rel='noreferrer'>
							{link.trim()}
						</Link>
					</li>
				))}
			</ul>
			<label htmlFor={checkboxId} className={cls.cardCheckbox}>
				<input type="checkbox" id={checkboxId} className={cls.checkbox} checked={isChecked} onChange={onCheckboxChangeHandler} disabled={false} />
				<span>mark question as completed</span>
			</label>
			<Button onClick={() => navigate(`/editquestion/${questions.data[cardId]?.id}`)}>Edit Question</Button>
			<Button onClick={() => navigate(`/`)}>Back</Button>
		</div>
	);
}