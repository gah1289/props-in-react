const App = () => (
	<div>
		{' '}
		<Tweet username="gah1289" name="Gabby" date="11/3/22" message="Wuddup" />
		<Tweet username="rcm9551" name="Reid" date="10/31/22" message="I'm afraid of trick or treaters" />
		<Tweet username="Jowls123" name="Hopper" date="8/6/22" message="Boof" />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
