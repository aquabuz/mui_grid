import React from "react";
import { useEffect } from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import DataGrid from "react-data-grid";

class ClassComponent extends React.Component {
	// state = {
	//   count: 0,
	// }
	constructor(props) {
		super(props);
		this.state = { count: 0 };
	}

	render() {
		return (
			<div>
				<h1 style={{ color: this.props.color }}>{this.props.message}</h1>
				<p>{this.state.count}</p>
			</div>
		);
		// return React.createElement(
		//   "h1",
		//   { style: { color: "red" } },
		//   "AAAAAAAAAAAAA"
		// );
	}
	// static defaultProps = {
	//   message: "!!~!1222222!",
	// };

	componentDidMount() {
		setTimeout(() => {
			// this.setState({
			// 	count: this.state.count + 1,
			// });
			this.setState((previousState) => {
				const newState = { count: previousState.count + 1 };
				return newState;
			});
		}, 1000);
	}
}

ClassComponent.defaultProps = {
	message: "!!~!1!",
};

// function ClassComponent({ message }) {
//   message = "HIIIIIIIIIIII";
//   return (
//     <div>
//       <h1>{message}</h1>
//     </div>
//   );
// }

export default function Home({ article }) {
	const columns = [
		{
			key: "id",
			name: "ID",
		},
		{
			key: "title",
			name: "Title",
			renderCell: (params) => <strong>{params.value}11111</strong>,
		},
	];

	let rows = article.map((el) => ({
		id: el.id,
		title: el.title,
	}));

	useEffect(() => {});

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<ClassComponent color="red" />
				<DataGrid columns={columns} rows={rows} className={styles.dataGrid} />
				{/* <DataGrid columns={columns} rows={rows} className={styles.dataGrid} /> */}
			</main>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
		const article = await res.json();
		return {
			props: {
				article,
				fallback: false,
			},
		};
	} catch (error) {
		console.log(error.message);
	}
};
