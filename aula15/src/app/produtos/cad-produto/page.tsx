'use client'
import { TipoProduto } from '@/types'
import { useState } from 'react'

export default function CadastrarProduto() {
    const [produto, setProduto] = useState<TipoProduto>({
        id:0,
        nome:"",
        preco:0.0,
        qtd:0
    })
    
    const handleCadastrar = async () => {
        
    }

  return (
    <div>
        <form action={handleCadastrar} className="formulario">
          <div>
            <label>Nome do Produto</label>
            <input 
            type="text" 
            name="nome"
            id="idNome"
            value={produto.nome}
            onChange={(e) => (setProduto({...produto, nome: e.target.value}))} 
            placeholder='Nome do produto'
            />
          </div>
          <div>
            <label>Preço</label>
            <input 
            type="number" 
            name="preco"
            id="idPreco"
            value={produto.preco}
            onChange={(e) => (setProduto({...produto, preco: parseFloat(e.target.value)}))} 
            placeholder='Preço do produto'
            />
          </div>
          <div>
            <label>Quantidade do Produto</label>
            <input 
            type="number" 
            name="qtd"
            id="idQtd"
            value={produto.qtd}
            onChange={(e) => (setProduto({...produto, qtd: parseInt(e.target.value)}))} 
            placeholder='Quantidade do produto'
            />
          </div>
          <div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Cadastrar
            </button>
          </div>
        </form>
    </div>
  )
}
