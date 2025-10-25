import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { QuestionCard } from '@components/QuestionCard'

import cls from './QuestionCardList.module.css'

export const QuestionCardList = () => {

	const [cards, setCards] = useState([]);
	const cardsLoaded = useLoaderData();

	useEffect(() => {
		cardsLoaded && setCards(cardsLoaded);

	}, [])

	return (
		<div className={cls.cardList}>
			{cards.map(card => {
				return <QuestionCard card={card} key={card.id} />;
			})}
		</div>
	)
}
