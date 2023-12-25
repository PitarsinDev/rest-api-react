import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [dogImage, setDogImage] = useState('');

  const getRandomDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Error fetching random dog:', error);
    }
  };

  return (
    <>
      <div className='p-5'>
          <h1 className='text-center text-3xl'>Random Dog Generator</h1>
          <div className='flex justify-center p-5'>
          <button className='border px-5 py-2 rounded-lg border-indigo-500 text-indigo-500' onClick={getRandomDog}>Get Random Dog</button>
          </div>
          <div className='flex justify-center'>
          {dogImage && <img className='rounded-lg border p-1 w-80' src={dogImage} alt="Random Dog" />}
          </div>
      </div>
    </>
  )
}

export default App
