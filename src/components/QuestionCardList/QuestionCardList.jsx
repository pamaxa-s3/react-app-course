import { useState, useEffect, memo, useMemo } from 'react'
import { useLoaderData } from 'react-router-dom'
import { QuestionCard } from '@components/QuestionCard'

import cls from './QuestionCardList.module.css'

export const QuestionCardList = memo(({ searchValue }) => {
	const [cards, setCards] = useState([]);
	const { questions } = useLoaderData();

	useEffect(() => {
		questions && setCards(questions.data);
	}, [])


	const filterCards = useMemo(() => {
		return cards.filter(card => card.question.toLowerCase().includes(searchValue.trim().toLowerCase()));
	}, [cards, searchValue]);

	return (
		<div className={cls.cardList}>
			{filterCards.length > 0 ? filterCards.map(card => {
				return <QuestionCard card={card} key={card.id} />;
			}) : <p className={cls.noCardsInfo}>No cards of serch</p>
			}
		</div>
	)
})
