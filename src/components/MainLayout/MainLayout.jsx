import { Outlet, useNavigation } from 'react-router-dom';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Spiner } from '@ui/Spiner'
import cls from './MainLayout.module.css';

export const MainLayout = () => {

	const navigation = useNavigation();
	const isLoading = navigation.state === 'loading';

	return (
		<div className={cls.mainLayout}>
			<Header />
			<div className={cls.mainWrapper}>
				{isLoading && <Spiner />}
				<main className={cls.main}>
					{!isLoading && <Outlet />}
				</main>
				<Footer />
			</div>
		</div>
	);
};
