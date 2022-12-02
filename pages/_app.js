import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

const Noop = ({children}) => <>{children}</>

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout ?? Noop
    return (
        <ThemeProvider attribute='class'>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}


export default MyApp
