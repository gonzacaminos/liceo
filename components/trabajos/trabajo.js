import Image from 'next/image'

export default function Trabajo(props){
    const {nombre, img} = props.data
   return (
        <div className="mb-10 lg:mx-2 filter brightness-100 hover:brightness-125">
            <Image src={`/images/trabajos/${img}`} width={720} height={1280} quality={90} className="m-0"/>
            <p className="bg-gray-900 text-white font-bold p-2">{nombre}</p>   
        </div>
   )
    
}