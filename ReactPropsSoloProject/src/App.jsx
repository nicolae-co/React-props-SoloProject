import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'

function App() {

  const dataMap = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className='cards'>
        {dataMap}
      </section>
    </div>
  )
}

export default App
