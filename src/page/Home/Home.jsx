import { useState } from 'react';
import { QuestionCardList } from '@components/QuestionCardList';
import { SearchInput } from '@components/SearchInput';
import { SortCard } from '@components/SortCard';
import cls from './Home.module.css';
import { Pagination } from '@components/Pagination';
import { SelectPerPage } from '@components/SelectPerPage/SelectPerPage';

export const Home = () => {
	const [searchValue, setSearchValue] = useState('');

	function onInputChangeHandler(e) {
		setSearchValue(e.target.value)
	}

	return (
		<>
			<div className={cls.controlsContainer}>
				<SearchInput value={searchValue} onChange={onInputChangeHandler} placeholder='search...' />
				<SortCard />
				<SelectPerPage />
			</div>
			<QuestionCardList searchValue={searchValue} />
			<Pagination />
		</>
	);
};
