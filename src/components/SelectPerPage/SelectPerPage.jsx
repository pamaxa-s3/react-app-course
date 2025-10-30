import { useLoaderData, useSearchParams } from 'react-router-dom';
import cls from './SelectPerPage.module.css'
import { DEFAULT_PAGE_COUNT } from '@constans';

export const SelectPerPage = () => {

	const { questions, sort } = useLoaderData();
	const [searchParams, setSearchParams] = useSearchParams();
	const perPage = searchParams.get('_per_page') || DEFAULT_PAGE_COUNT;

	const onperPageChange = (e) => {
		const perPageChois = e.target.value;
		const params = {};
		if (perPageChois.length) params._per_page = perPageChois;
		params._sort = sort;
		setSearchParams(params);
	}

	return (
		<select value={perPage} onChange={onperPageChange} className={cls.select}>
			<option value={'quantity questions on a page'} disabled>quantity questions on a page</option>
			<hr />
			<option value={'8'}>8</option>
			<option value={'12'}>12</option>
			<option value={Math.ceil(questions.items / 2)}>Half</option>
			<option value={questions.items}>All</option>
		</select>
	)
}