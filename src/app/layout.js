import './globals.css'
import Header from "./components/Header"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black text-white'>
        <main>
          <Header />
          {children}  
        </main> 
      </body>
    </html>
  )
}
