import cls from './Badge.module.css';

export const Badge = ({ variant, children }) => {

	let variantColor = '';
	switch (variant) {
		case "primary":
			variantColor = "primary";
			break;
		case "succes":
			variantColor = "succes";
			break;
		case "warning":
			variantColor = "warning";
			break;
		case "alert":
			variantColor = "alert";
			break;
		default: variantColor: "";
	}

	return (
		<div className={`${cls.badge} ${cls[variantColor]}`}>
			{children}
		</div>
	)
}
