import { useState } from 'react'
import App from 'next/app'
import GlobalStyle from '../style/global'
import Header from '../header'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle/>
			<Header/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp