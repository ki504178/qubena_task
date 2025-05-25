type Props = {
	title: string;
	description: string;
};

export const Sample: React.FC<Props> = ({ title, description }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};
