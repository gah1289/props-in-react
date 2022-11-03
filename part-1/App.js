const App = () => (
	<div>
		<FirstComponent>My very first component</FirstComponent>
		<NamedComponent name="name" />
	</div>
);
ReactDOM.render(<App />, document.getElementById('root'));
