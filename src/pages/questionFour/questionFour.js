import React from "react";
import { useCountRenders} from "./useCountRenders";

const QuestionFour = () => {
	const [loading, setLoading] = React.useState(true);
	const [counter, setCounter] = React.useState(0);
	const [names, setNames] = React.useState([]);
	const [selectedNames, setSelectedNames] = React.useState({});

	React.useEffect(() => {
		const response = fetch("https:/random-word-api.herokuapp.com/word?number=5");
		setNames(response.body);

		setLoading(false);
	}, [loading]);

	const increment = React.useCallback(() => {
		setCounter(++counter);
	}, [counter, setCounter]);

	const handleAddItem = function(name) {
		if(selectedNames.indexOf(name) != -1) {
			setSelectedNames([...selectedNames, name]);
		}
	}

	if (loading) {
		return (<div>Loading</div>);
	}

	return (
		<div>
			<div>
				<ButtonsList items={names} handleAddItem={handleAddItem} />
				<Selection selectedItems={selectedNames} />
			</div>
		<br />
		<Counter increment={increment} />
			<label>{counter}</label>
		</div>
	);}

const Counter = React.memo((props) => {
	const increment = props;
	const renderCount = useCountRenders()
	return (
		<div>
			<button onKeyPress={() => {
				increment();
			}}>Click Me</button>
			<div style={{ position: "absolute", left: 0, bottom: 0 }}>re-render count: {renderCount}</div>
		</div>
	);
});

const ButtonsList = ({items,
	handleAddItem}) =>
{
	return (
		<div>
			{items.map((item, i) => (<button onClick={handleAddItem}>{item}</button>))}
		</div>
	)
}

const Selection = ({selectedItems}) => {
	return (
		<ul>
			{selectedItems.map((item, i) => (<li key={i}>{item}</li>))}
		</ul>
	);
}


export default QuestionFour