import '@/app/_styles/globals.css'
import { Josefin_Sans } from 'next/font/google'
import Header from './_components/Header'
import { ReservationProvider } from './_components/ReservationContext'

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
        className={`${josefinSans.className} relative flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased`}
      >
        <Header />
        <div className='grid flex-1 px-8 py-12'>
          <main className='mx-auto w-full max-w-7xl'>
            {/* To share state between components */}
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  )
}
