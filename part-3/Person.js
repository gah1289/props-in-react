const Person = (props) => {
	let reply;
	let displayName;
	if (props.age < 18) {
		reply = 'you must be 18';
	}
	else {
		reply = 'Please go vote!';
	}

	if (props.name.length > 6) {
		displayName = props.name.slice(0, 6);
	}
	else {
		displayName = props.name;
	}

	return (
		<div>
			<p> Learn some information about this person.</p>
			<h2>Name: {displayName} </h2>
			<h2>age: {props.age} </h2>
			<h3> {reply}</h3>

			<ul>
				Hobbies:
				{props.hobbies.map((h) => <li>{h}</li>)}
			</ul>
		</div>
	);
};
