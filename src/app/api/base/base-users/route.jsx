import {promises as fs} from "fs"
import { NextResponse } from "next/server";

const file = await fs.readFile(process.cwd() + "/src/app/api/base/data.json", "utf8");

export async function GET(){

    //PARSEANDO A BASE DE DADOS DOS USUÁRIOS
    const body = JSON.parse(file);

    //RETORNANDO UM STATUS.
    return NextResponse.json(body); 

}


const handleLogin = async (email,senha) => {
    const body = await JSON.parse(file);

    //Sistema de validação de login, retornando um usuário válido, ou undefined caso não encontre.    
    const usuarioValidado = body.usuarios.find((user) => user.email == email && user.senha == senha);

    return usuarioValidado;
}


export async function POST(request,response){

    //RECEBENDO OS DADOS ENVIADOS NA REQUISIÇÃO!
    const {email,senha} = await request.json();

    //VALIDANDO O LOGIN
    const uv = await handleLogin(email,senha);

    //CASO O USUÁRIO SEJA VÁLIDO, RETORNA TRUE, CASO CONTRÁRIO, RETORNA FALSE.
    if(uv){
        return NextResponse.json({"status":true});
    }

    return NextResponse.json({"status":false});
}

export async function GET_ALL(){

    const body = JSON.parse(file)
    return NextResponse.json(body)
}

export async function GET_BY_ID(request, {params}){


    try {
        const fileId = params.id;
        console.log('ID da rota:', fileId);


        const body = JSON.parse(file);
    
        console.log('Data from data.json:', body);
    
        const user = body.usuarios.find(user => user.id == fileId);
    
        if (user) {
          console.log('User found:', user);
          return NextResponse.json(user);
        } else {
          console.log('User not found');
          return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
        }
      } catch (error) {
        console.error('Erro ao ler o arquivo data.json:', error);
        return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
      }


}