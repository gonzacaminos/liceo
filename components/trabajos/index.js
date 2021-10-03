import {data} from './data'
import Trabajo from './trabajo'

export default function Trabajos(props){

    const renderTrabajos = () => (
        data.map(item => (
           <Trabajo data={item} />
        ))
    )

    return (
        <div className="p-10 mx-auto lg:flex">
            <div className="lg:sticky top-4 self-start pr-10 text-left mb-10">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Trabajos 3°B</h1>
                <h2 className="text-md text-gray-800">Formación Visual | Juan Gallerano | 2021</h2>
                <h3 className="text-sm text-gray-800">Liceo Victor Mercante</h3>
            </div>
            <div className="max-w-xl lg:grid lg:grid-cols-2">
            {renderTrabajos()}
            </div>
           
        </div>
    )
  
}