import { useCountPoke } from './hooks/useCountPoke';

import { Button } from './Components/Button'

import './sass/App.scss'
import { TiMediaRewindOutline, TiMediaFastForwardOutline } from "react-icons/ti";
import { Card } from './Components/Card';

function App() {

  const { evolution, pokeId, restCount, onAddCount } = useCountPoke()

  return (
    <div className='app'>
      {/* Card */}
      <div className={`card-container card${evolution.length}`}>
        {
          evolution.map(poke => (
            <Card
              key={poke[0]}
              name={poke[0]}
              img={poke[1]}
            />
          ))
        }
      </div>
      {/* Botones */}
      <div className='btns-container'>
        <Button btn={<TiMediaRewindOutline />} fn={restCount} />
        <Button btn={<TiMediaFastForwardOutline />} fn={onAddCount} />
      </div>
    </div>
  )
}

export default App
