"use client";

import { TipoProduto } from "@/types";
import { useState } from "react";
import Produto from "../produto/[id]/page";

export default function CadProdutos() {

  const [produto, setProduto] = useState<TipoProduto>({
    id:0,
    nome:"",
    preco:0.0,
    qtd:0.0
  });

    return (
        <div>
        <form className="max-w-sm mx-auto">
        
        <div className="mb-5">
            <label
              form="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nome
            </label>
            <input
              type="text"
              id="idNome"
              name="nome"
              value={produto.nome}
              onChange={(e)=> setProduto({...produto,nome:e.target.value})}

              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex: Furadeira"
              required
            />
          </div>
          <div className="mb-5">
            <label
              form="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Preço do produto
            </label>
            <input
              type="number"
              id="idPreco"
              name="preco"
              value={produto.preco}
              onChange={(e)=> setProduto({...produto,preco:e.target.value})}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex: 54.80"
              required
            />

          </div>
          <div className="mb-5">
            <label
              form="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantidade de produtos
            </label>
            <input
              type="number"
              id="idQtd"
              name="qtd"
              value=""

              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex: 5"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Cadastrar
          </button>
        </form>
      </div>
    )
}