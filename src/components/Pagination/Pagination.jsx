import { useLoaderData, useSearchParams } from 'react-router-dom';
import { Button } from '@components/Button';
import cls from './Pagination.module.css';

export const Pagination = () => {
	const { questions, sort } = useLoaderData();
	const [searchParams, setSearchParams] = useSearchParams();
	const pageValue = searchParams.get('_page') || 1;

	const onPageChange = (e) => {
		if (e.target.tagName === 'BUTTON') {
			const pageChoice = e.target.textContent;
			const params = {};
			if (pageChoice.length) params._page = pageChoice;
			params._sort = sort;

			setSearchParams(params);
		}
	}

	return (
		<div className={cls.paginationBlock} onClick={onPageChange}>
			{questions && questions?.pages > 1 && Array(questions?.pages).fill(0).map((_, i) => (
				<Button key={i}
					isActive={Number(pageValue) === (i + 1)}
				>{i + 1}</Button>
			))}
		</div>
	)
}
