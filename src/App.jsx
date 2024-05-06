import { useEffect, useState } from 'react'

import './App.css'
import Commentsboard from './components/Commentsboard';

function App() {
  const [messageData, setData] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try{
        const resposta = await fetch('./../data.json')
        if(!resposta.ok){
          throw new Error('Failed to fetch');
        }
        const data = await resposta.json();
        console.log(data.comments)
      setData(data);
      } catch (error){
        console.log('Error fetching data:', error);
      } 
    };

    fetchData();
  }, [])
  return (
    <>
      <div>
      <h1>JSON Data:</h1>
      {messageData ? (
        <Commentsboard comments={messageData.comments}/>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  )
}

export default App
