import './globals.css'
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='text-white'>
        <main>
          <Header />
           {children}  
          <Footer />
        </main> 
      </body>
    </html>
  )
}
