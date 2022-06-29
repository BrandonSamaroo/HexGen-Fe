import './App.css'
import '../ColorPicker/ColorPicker'
import ColorPicker from '../ColorPicker/ColorPicker'
import Header from '../Header/Header'

export default function App() {

  return (
    <div className="App">
      <Header/>
      <ColorPicker/>
    </div>
  )
}

