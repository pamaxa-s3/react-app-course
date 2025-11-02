import { useSearchParams } from 'react-router-dom';
import cls from './SortCard.module.css'

export const SortCard = () => {

	const [searchParams, setSearchParams] = useSearchParams();
	const sortValue = searchParams.get('_sort') || '';

	const onSortSelectValueHandler = (e) => {
		const sortValue = e.target.value;
		const params = {};
		if (sortValue.length) params._sort = sortValue;
		setSearchParams(params);
	}

	return (
		<select value={sortValue} onChange={onSortSelectValueHandler} className={cls.select}>
			<option value={''}>sort by</option>
			<hr />
			<option value={'level'}>level ASC</option>
			<option value={'-level'}>level DESC</option>
			<option value={'completed'}>completed ASC</option>
			<option value={'-completed'}>completed DESC</option>
		</select>
	)
}