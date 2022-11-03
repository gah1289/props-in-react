const Tweet = (props) => {
	return (
		<ul>
			<li>
				<b>Username: </b>
				{props.username}
			</li>

			<li>
				<b>Name: </b>
				{props.name}
			</li>

			<li>
				<b>Date: </b>
				{props.date}
			</li>

			<li>
				<b>Message: </b>
				{props.message}
			</li>
		</ul>
	);
};
