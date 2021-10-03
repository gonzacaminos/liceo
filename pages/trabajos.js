import Layout from '@/components/layout'
import Trabajos from '@/components/trabajos'

export default function PaginaTrabajos() {

  const titulo = "Hola, chicxs!"

  return (
    <Layout className="bg-cover bg-gray-200 bg-no-repeat bg-blend-multiply">
      <div className="max-w-6xl mx-auto text-center">
            <Trabajos />        
      </div>
    </Layout> 
  )
}