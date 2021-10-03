import {useState, useEffect} from 'react'
import Layout from '@/components/layout'
import { SliderPicker, SketchPicker } from 'react-color'
import Circulo from '@/components/circulo'

export default function Home() {

  const titulo = "Hola, chicxs!"
  const texto = "Veamos qué tan fácil es hacer que un texto se lea sobre un fondo y qué podemos hacer al respecto."
  const [color, setColor] = useState("#3d3d3d")
  const [fondo, setFondo] = useState("#eeeeee")
  const [useImage, setUseImage] = useState(false)

  let styles = {
    backgroundColor: fondo,
    backgroundImage: useImage ? "url('https://picsum.photos/1200')" : 'none',
    color: color
  }

  function changeColor(color) {
    setColor(color.hex)
  }

  function changeFondo(color) {
    setFondo(color.hex)
  }

  function changeImage(e){
    setUseImage(e.target.checked)
  }
 

  return (
    <Layout style={styles} className="bg-cover bg-no-repeat bg-blend-multiply">
      <div className="max-w-6xl mx-auto flex flex-col min-h-screen lg:h-screen px-4 py-10">
        <input type="text" className="text-6xl font-bold mb-10 bg-transparent" defaultValue={titulo}/>
        <textarea className="text-xl bg-transparent mb-4" defaultValue={texto}/>
        <label className="text-base mb-10 bg-transparent pr-10"><input type="checkbox" className="p-10" id="cbox1" defaultChecked={false} onClick={changeImage}/> Usar imagen? </label>
        <div className="mt-10 lg:mt-auto">
          <div className="lg:flex justify-between">
            <div className="p-4 mx-auto">
              <p className="text-base text-center mb-4">Color de fondo: {fondo}</p>
              <SketchPicker color={fondo} onChangeComplete={changeFondo } className="hidden lg:block mx-auto"/>
              <SliderPicker color={fondo} onChangeComplete={changeFondo } className="lg:hidden mx-auto"/>
            </div>
            <div className="p-4 mx-auto hidden">
            <p className="text-base text-center mb-4">Shift para cambiar el color de texto</p>
             <Circulo setFondo={changeFondo} setColor={changeColor}/>
            </div>
            <div className="p-4 mx-auto">
              <p className="text-base text-center mb-4">Color de texto: {color}</p>
              <SketchPicker color={color} onChangeComplete={changeColor} className="hidden lg:block mx-auto"/>
              <SliderPicker color={color} onChangeComplete={changeColor } className="lg:hidden mx-auto"/>
            </div>
            
          </div>
        
        </div>
      </div>
    </Layout>
  )
}
