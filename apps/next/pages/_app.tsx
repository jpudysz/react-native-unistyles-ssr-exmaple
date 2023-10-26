import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'

export const MyApp = ({ Component, pageProps }: SolitoAppProps) => {
    return (
        <React.Fragment>
            <Head>
                <title>Solito Example App</title>
                <meta
                    name="description"
                    content="Expo + Next.js with Solito. By Fernando Rojo."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Provider>
                <Component {...pageProps} />
            </Provider>
        </React.Fragment>
    )
}

export default MyApp
