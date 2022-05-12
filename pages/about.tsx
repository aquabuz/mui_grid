import next from "next";
import React from "react";
import ReactDOM from "react-dom";

export default function About() {
	return <App name="Mark" />;
}

/*
class App extends React.Component {
	state = {
		age: 39,
	};
	constructor(props) {
		super(props);
		console.log("constructor", props);
	}
	render() {
		console.log("render");
		return (
			<div>
				<h2>
					hello {this.props.name} - {this.state.age}
				</h2>
			</div>
		);
	}
	// componentWillMount() {
	// 	console.log("componentWillMount");
	// }
	static getDerivedStateFromProps(nextProps: any, prevState: any) {
		console.log("getDerivedStateFromProps", nextProps, prevState);
		return null;
	}
	componentDidMount() {
		console.log("componentDidMount");
		this.interval = setInterval(() => {
			console.log("setInterval");
			this.setState((state) => {
				return {
					...state,
					age: this.state.age + 1,
				};
			});
		}, 1000);
	}
	// componentWillReceiveProps(nextProps: any) {
	// 	console.log("componentWillReceiveProps", nextProps);
	// }
	shouldComponentUpdate(nextProps: any, nextState: any) {
		console.log("shouldComponentUpdate", nextProps, nextState);
		return true;
	}
	// componentWillUpdate(nextProps: any, nextState: any) {
	// 	console.log("componentWillUpdate", nextProps, nextState);
	// }
	componentDidUpdate(prevProps: any, prevState: any) {
		console.log("componentDidUpdate", prevProps, prevState);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
}
*/

/* 
let i = 0;

class App extends React.Component {
	state = { list: [] };

	render() {
		return (
			<div id="list" style={{ height: 100, overflow: "auto" }}>
				{this.state.list.map((i) => {
					return <div key={i}>{i}</div>;
				})}
			</div>
		);
	}

	componentDidMount() {
		setInterval(() => {
			this.setState((state) => ({ list: [...state.list, i++] }));
		}, 1000);
	}

	getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
		if (prevState.list.length === this.state.list.length) return null;
		const list = document.querySelector("#list");
		return list.scrollHeight - list.scrollTop;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (snapshot === null) return;
		const list = document.querySelector("#list");
		list.scrollTop = list.scrollHeight - snapshot;

		console.log(list.scrollHeight, snapshot, list.scrollTop);
	}
}
*/

class App extends React.Component {
	state = {
		hasError: false,
	};
	render() {
		if (this.state.hasError) {
			return <div>{this.state.hasError}</div>;
		}
		return <div>{this.state.hasError}</div>;
	}
	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}
}
