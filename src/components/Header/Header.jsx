import { Button } from '@components/Button';
import cls from './Header.module.css';
import logo from '@assets/react.svg';

export const Header = () => {
	return (
		<header className={cls.header}>
			<p>
				<img src={logo} alt="logo react" />
				<span>React Cards</span>
			</p>
			<div className={cls.headerButtonGroup}>
				<Button isDisabled>Add</Button>
				<Button isActive>Login</Button>
			</div>
		</header>
	);
};
