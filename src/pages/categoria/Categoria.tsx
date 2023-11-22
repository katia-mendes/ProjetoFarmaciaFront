import React, { useEffect, useState } from 'react';
import Categoria from '../../models/Categoria';
import CardCategorias from './CardCategoria';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
    
      setCategorias(categorias);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('Erro, tente novamente');
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <>
      <div className="font-fontProjeto font-bold container z-0 w-[80vw] px-[1vw] mx-auto my-0 grid grid-cols-3 gap-4">
        <div className="col-span-3 flex justify-between items-center mt-8 mb-10">
          <div className="px-4 py-2 text-2xl text-white bg-[white] hover:bg-[#0F9D84]"></div>

          <h1 className="text-center text-6xl text-[#DB5413] font-bold">Categorias</h1>

        
          </div>
        </div>

        {categorias.map((categoria) => (
          <>
            <CardCategorias key={categoria.id} categoria={categoria} />
          </>
        ))}
    
    </>
  );
}

export default ListaCategorias;