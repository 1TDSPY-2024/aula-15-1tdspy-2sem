"use client";

import { TipoProduto } from "@/types";
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Produtos() {

    // const produtos = [
    //     {id: 1, nome: "Mouse", preco: 100.0, qtd: 3 },
    //     {id: 2, nome: "Monitor", preco: 760.5, qtd: 1 },
    //     {id: 3, nome: "Headset", preco: 250.0, qtd: 2 },
    //     {id: 4, nome: "Teclado", preco: 1.0, qtd: 1 },
    //     {id: 5, nome: "Cabo LAN", preco: 5.0, qtd: 5 }
    // ]

    const [produtos, setProdutos] = useState<TipoProduto[]>([]);

    useEffect(() => {
        
        const chamadaApi = async ()=>{
            const response = await fetch("http://localhost:3000/api/base-produtos");
            const data = await response.json();

            setProdutos(data);
        }

        chamadaApi();
    }, [])
    
    return (
        <div>
            <h2>Produtos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Editar</th>
                    </tr>
                </thead>

                <tbody>
                    {produtos.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td>{p.qtd}</td>
                            <td><Link href={`/produtos/produto/${p.id}`}>Editar</Link></td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan={5}>
                            Quantidade de registros: {produtos.length}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
