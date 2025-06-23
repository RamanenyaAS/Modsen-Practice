import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import type { RootState, AppDispatch } from './store/store'
import { useState } from 'react';
import { setColor } from './store/colorSlice';

function App() {
  const backgroundColor = useSelector((state: RootState) => state.color.value);
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState(backgroundColor);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(setColor(e.target.value));
  }


  return (
    <>
      <div className="background" style={{ backgroundColor }}>
        <div className="title-container">
          <h1>Выберите цвет фона</h1>
        </div>
        <input className="input" type="text" value={inputValue} onChange={handleChange} placeholder='Введите цвет: #ff0000, red, rgb(255,0,0)' />
      </div>
    </>
  )
}

export default App
