import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<title>Student Manager</title>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					{/*Below we add the modal wrapper*/}
					<div id="modal-root"></div>
				</body>
			</Html>
		);
	}
}

export default MainDocument;
