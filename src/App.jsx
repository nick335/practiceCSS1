import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='template'>
      <section className='section'>
        <div className='line1'>
          {/* content 1 */}
          <div className='struct struct1'>
            <div className='imageDiv'></div>
            <div className='contentDiv'>
              <h3>Networking Opportunities</h3>
              <p>Exceptional networking with influential businesswomen from Europe and the Arab region</p>
            </div>
          </div>
        </div>
        <div className='line2'>
          {/* content 2 */}
          <div className='struct struct2'>
            <div className='imageDiv'></div>
            <div className='contentDiv'>
              <h3>Sustainabiltiy</h3>
              <p>Join a Sustainabiltiy-focused platform to drive postive change and business growth</p>
            </div>
          </div>
        </div>
        <div className='line3'>
          {/* content 3 */}
          <div className='struct struct1'>
            <div className='imageDiv'></div>
            <div className='contentDiv'>
              <h3>Cultural & Economic Bridges</h3>
              <p>Bridge cultures and economies through meaningful connections</p>
            </div>
          </div>
        </div>
        <div className='line4'></div>
      </section>
      
    </main>
  )
}

export default App
