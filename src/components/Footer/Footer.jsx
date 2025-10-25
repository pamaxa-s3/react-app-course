import cls from './Footer.module.css';

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={cls.footer}>
			<p>
				React Question Cards Application | {currentYear}
			</p>
			<p className={cls.test}>By Roman Strynzha</p>
		</footer>
	);
};
