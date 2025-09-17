import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🎉 Unnati App
        </h1>
        <p className="text-gray-600">
          Tailwind CSS is working! Ready to build.
        </p>
      </div>
    </div>
  )
}

export default App
