import Logo from '@/app/_components/Logo'
import Navigation from '@/app/_components/Navigation'
import '@/app/_styles/globals.css'
import { Josefin_Sans } from 'next/font/google'
import Header from './_components/Header'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  // title: 'Oasis Hotel',
  title: {
    template: '%s / The Oasis Hotel',
    default: 'Welcome / The Oasis Hotel',
  },
  description:
    'Luxurious Cabin Hotel, located in teh heart of Italian Dolomites, surrounded by beautiful mountains and dark forests',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${josefinSans.className} bg-primary-950  text-primary-100 min-h-screen flex flex-col relative antialiased`}
      >
        <Header />
        <div className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>{children}</main>
        </div>
      </body>
    </html>
  )
}
