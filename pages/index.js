import {useState, useRef} from 'react'
import Layout from '@/components/layout'
import { PhotoshopPicker, SketchPicker } from 'react-color'
import Circulo from '@/components/circulo'

export default function Home() {

  const titulo = "Hola, chicxs!"
  const texto = "Veamos qué tan fácil es hacer que un texto se lea sobre un fondo y qué podemos hacer al respecto."
  const [color, setColor] = useState("#D50E0E")
  const [fondo, setFondo] = useState("#eeeeee")
  const circulo = useRef()

  function changeColor(color) {
    setColor(color.hex)
  }

  function changeFondo(color) {
    setFondo(color.hex)
  }

 


  return (
    <Layout style={{background: fondo, color: color}}>
      <div className="max-w-6xl mx-auto flex flex-col lg:h-screen px-4 py-10">
        <input type="text" className="text-6xl font-bold mb-10 bg-transparent" defaultValue={titulo}/>
        <textarea className="text-xl bg-transparent" defaultValue={texto}/>
        <div className="mt-10 lg:mt-auto">
          <div className="lg:flex justify-between">
            <div className="p-4 mx-auto">
              <p className="text-base text-center mb-4">Color de fondo: {fondo}</p>
              <SketchPicker color={fondo} onChangeComplete={changeFondo } className="mx-auto"/>
            </div>
            <div className="p-4 mx-auto">
            <p className="text-base text-center mb-4">Shift para cambiar el color de texto</p>
             <Circulo setFondo={changeFondo} setColor={changeColor}/>
            </div>
            <div className="p-4 mx-auto">
              <p className="text-base text-center mb-4">Color de texto: {color}</p>
              <SketchPicker color={color} onChangeComplete={changeColor} className="mx-auto"/>
            </div>
            
          </div>
        
        </div>
      </div>
    </Layout>
  )
}
