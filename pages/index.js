import {useState} from 'react'
import Layout from '@/components/layout'
import { PhotoshopPicker, SketchPicker } from 'react-color'
import SVG from 'react-inlinesvg';

export default function Home() {
  const titulo = "Hola, chicxs!"
  const texto = "Veamos qué tan fácil es hacer que un texto se lea sobre un fondo y qué podemos hacer al respecto."
  const [color, setColor] = useState("#D50E0E")
  const [fondo, setFondo] = useState("#eeeeee")

  function changeColor(color, event) {
    setColor(color.hex)
  }

  function changeFondo(color, event) {
    setFondo(color.hex)
  }

  function handleClick(e){
    const _color = e.target.getAttribute('fill').toLowerCase()
    console.log(_color)
    if(_color.includes('#')) {
      setColor(_color)
    }

  }

  return (
    <Layout style={{background: fondo, color: color}}>
      <div className="max-w-6xl mx-auto flex flex-col h-screen py-10">
        <input type="text" className="text-6xl font-bold mb-10 bg-transparent" defaultValue={titulo}/>
        <textarea className="text-xl bg-transparent" defaultValue={texto}/>
        <div className="mt-auto">
          <div className="flex justify-between">
            <div>
              <p className="text-base text-center mb-4">Color de fondo: {fondo}</p>
              <SketchPicker color={fondo} onChangeComplete={changeFondo }/>
            </div>
            <div onClick={handleClick}>
             <SVG src={'/images/circulo.svg'} width={300} height="auto" title="Círculo cromático" />
            </div>
            <div>
              <p className="text-base text-center mb-4">Color de texto: {color}</p>
              <SketchPicker color={color} onChangeComplete={changeColor }/>
            </div>
            
          </div>
        
        </div>
      </div>
    </Layout>
  )
}
