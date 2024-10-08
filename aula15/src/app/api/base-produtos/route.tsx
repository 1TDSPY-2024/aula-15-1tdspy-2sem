import { NextResponse } from "next/server";
import {promises as fs} from "fs";
import { TipoProduto } from "@/types";

export async function GET() {   


    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const dados = JSON.parse(file);
    return NextResponse.json(dados);
}

export async function POST(request:Request) {
     //recuperando dados de uma pseudo base de dados 
     //lembrese que ao recuperar os dados do arquivo, ele esta em modo de string/json e não em objto
     

    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    //por isso é necessario fazer o parse para converter em objeto
    const produtos:TipoProduto[] = JSON.parse(file);
    //Recebendo o request do cliente:
    //o cliente pode ser um testador de api que gere requisicoes do tipo POST, ou um fomrulario que envia dados para a api
    const{ id,nome,preco,qtd} = await request.json();

    const produto = {id,nome,preco,qtd} as TipoProduto;

    produto.id = (produtos[produtos.length - 1].id +1);

    produtos.push(produto);
    const fileCreated = JSON.stringify(produtos)
    await fs.writeFile(process.cwd() + '/src/data/base.json',fileCreated);

    return NextResponse.json(produto,{status:201});

}