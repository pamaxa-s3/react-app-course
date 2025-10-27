import { useState } from 'react'
import cls from './SortCard.module.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

export const SortCard = () => {
	const { question, sort } = useLoaderData();
	const [sortSelectValue, setSortSelectValue] = useState(`${sort || ''}`);
	const navigate = useNavigate();

	const onSortSelectValueHandler = (e) => {
		const sortValue = e.target.value;
		setSortSelectValue(sortValue);
		navigate(`?_sort=${sortValue}`);
	}

	return (
		<select value={sortSelectValue} onChange={onSortSelectValueHandler} className={cls.select}>
			<option value={''}>sort by</option>
			<hr />
			<option value={'level'}>level ASC</option>
			<option value={'-level'}>level DESC</option>
			<option value={'completed'}>completed ASC</option>
			<option value={'-completed'}>completed DESC</option>
		</select>
	)
}
