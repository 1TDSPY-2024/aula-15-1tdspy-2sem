import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoProduto } from "@/types";

export async function GET() {   
    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const dados = JSON.parse(file);
    return NextResponse.json(dados);
}

export async function POST(request:Request) {
    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const produtos: TipoProduto[] = JSON.parse(file);
    // Recuperando os dados da nossa PSEUDO-BASE de dados o arquivo .json
    //Recebendo o request do cliente:
    const { id, nome, preco, qtd} = await request.json();

    const produto = {id, nome, preco, qtd} as TipoProduto

    produto.id = produtos[ produtos.length - 1 ].id + 1

    produtos.push(produto)

    const fileCreated = JSON.stringify(produtos)

    await fs.writeFile(process.cwd()+'/src/data/base.json', fileCreated)

    return NextResponse.json(produto,{status:201});

}