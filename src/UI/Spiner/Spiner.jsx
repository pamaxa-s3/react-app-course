import cls from './Spiner.module.css'

export const Spiner = () => {
	return (
		<div className={cls.loaderWrapper}>
			<span className={cls.loader}></span>
		</div>
	)
}
