import { useState } from 'react';
import { QuestionCardList } from '@components/QuestionCardList';
import { SearchInput } from '@components/SearchInput';
import { SortCard } from '@components/SortCard';
import { SelectPerPage } from '@components/SelectPerPage';
import { Pagination } from '@components/Pagination';
import cls from './Home.module.css';

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
