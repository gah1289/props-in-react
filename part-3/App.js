const App = () => (
	<div>
		<Person
			name="Gabriela"
			age={33}
			hobbies={[
				'Coding',
				'Baking',
				'Peloton'
			]}
		/>
		<Person
			name="Annie"
			age={5}
			hobbies={[
				'Soccer',
				'Hiking'
			]}
		/>
		<Person
			name="Reid"
			age={35}
			hobbies={[
				'Brews with the bros',
				'Jetskiing',
				'Hockey'
			]}
		/>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
