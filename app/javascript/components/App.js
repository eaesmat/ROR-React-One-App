import React from 'react';
import { useSelector } from 'react-redux'

function App() {
const greeting = useSelector(state => state.greeting);

  return (
    <div>Hello {greeting.greeting_message || 'Greeting not loaded'}</div>
  )
}

export default App