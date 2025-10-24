import cls from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';

export const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div className={cls.container}>
			<h1 className={cls.title}>404</h1>
			<p className={cls.text}>
				Oops! The page you’re looking for doesn’t exist.
			</p>
			<Button onClick={() => navigate('/')} className={cls.button}>
				Go Home
			</Button>
			<p className={cls.footer}>— Lost in the code jungle —</p>
		</div>
	);
};
