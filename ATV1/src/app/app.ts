import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from '@openng/optimus-ui/button';
import { CardModule } from '@openng/optimus-ui/card';

export interface Planta {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  dataCompra: string;
  rara: boolean;
};


@Component({
  imports: [RouterOutlet, ButtonModule, CardModule], //imports do OptimusUI
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',

})

export class App {
  //Listar plantas , nao usa let dentro da classe
  plantas: Planta[] = [];
  
  proximoId = 1;
  
  //Criar plantas - incluir
  criarPlantas():void { 
    let nome = prompt("Digite o nome da planta: ") ?? ""; //O prompt() abre uma caixinha no navegador pedindo uma informação ao usuário.
    let preco = Number(prompt("Digite o preço da planta: ") ?? "") //Faz parecido soq com numero
    let novaPlanta : Planta = {
      id: this.proximoId++,
      nome,
      preco,
      descricao: "", //começa vazia
      imagem: "",
      dataCompra: "",
      rara: false,
    };
    this.plantas.push(novaPlanta);
    
    console.log("Planta criada com sucesso")
    //console.log(novaPlanta)

  }

listarPlantas():void{ //Listar plantas
  console.log("Lista de plantas: ");
  if(this.plantas.length === 0){
    console.log("Nenhuma planta cadastrada.");
  }else{
    this.plantas.forEach((p)=>{ //passa dentro do vetor varrendo cada item, p representa plantas
      console.log(`ID: ${p.id} / Nome: ${p.nome} / imagem ${p.imagem}`);
  });

}
}
//atualizar - alterar
alterarPlantas():void{
  let id = Number(prompt("Digite o id da planta para alterar"));
  let planta = this.plantas.find((p) => p.id == id); //busca o id

  if(!planta){
    console.log("Planta não encontrada!");
    return;
  }
  let novoNome = prompt('Novo nome(Enter para mantar o atual):' ) ?? "";


  if(novoNome) planta.nome = novoNome;

  console.log("planta atualizada!!");
}
//excluir - deletar
deletarPlantas():void{
   const id = Number(prompt("Digite o id da planta para deletar"));
   const index = this.plantas.findIndex((p) => p.id === id);

   if(index === -1){
    console.log("Planta não encontrada")
    return;
   }
   this.plantas.splice(index, 1); //index e quantidade de itens para excluir
   console.log("Planta deletada com sucesso!");
}


//constructor() {
//  this.criarPlantas();
//  this.listarPlantas();
 // this.alterarPlanta();
//  this.deletarPlanta();
//  this.listarPlantas();
//  }


}
//npm start para rodar a aplicação