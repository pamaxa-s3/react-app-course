import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import cls from './MainLayout.module.css';

export const MainLayout = () => {
	return (
		<div className={cls.mainLayout}>
			<Header />
			<div className={cls.mainWrapper}>
				<main className={cls.main}>
					<Outlet />
				</main>
				<Footer />
			</div>
		</div>
	);
};
