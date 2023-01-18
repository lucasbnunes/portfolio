import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { Layout } from '@/components/Layout'
import { ContactBarContextProvider } from 'contexts/ContactBarContext'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>{`
    html {
      font-family: ${inter.style.fontFamily};
    }
  `}</style>
    <ContactBarContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContactBarContextProvider>
  </>
}
