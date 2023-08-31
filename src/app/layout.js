import './globals.css'
import Header from "./components/Header"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='text-white'>
        <main>
          <Header />
          {children}  
        </main> 
      </body>
    </html>
  )
}
