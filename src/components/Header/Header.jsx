import { Button } from '@components/Button';
import cls from './Header.module.css';
import logo from '@assets/react.svg';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();
	return (
		<header className={cls.header}>
			<p onClick={() => navigate('/')}>
				<img src={logo} alt="logo react" />
				<span>React Cards</span>
			</p>
			<div className={cls.headerButtonGroup}>
				<Button onClick={() => navigate('/addquestion')}>Add</Button>
				<Button>Login</Button>
			</div>
		</header>
	);
};
