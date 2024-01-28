/*Objetivo 1 - quando o usuário clicar no botão de seleção de plataforma deve abrir uma caixa com os botões de seleção de plataforma
        Passo 1 - pegar o botao de seleção de pataforma no js pra poder verificar quando o usuário clicar em cima dele

        Passo 2 -pegar o elemento do conteúdo que precisa ser monstrado

        Passo 3 - pegar o clique do usuário no js 

        Passo 4 - quando usuário clicra , adicionar a classe ativo  na listagem de plataforma dentro do botão pra que o conteúdo apareça

Objetivo 2 - caso a lista de botões de plataformas ja esteja aparecendo e o usuário clicar no botão de fechar ,o conteúdo deve ser esconddido
        Passo 1 - verificar se o botão já foi ativado pelo usuário, se sim , se devemos remover a classe ativo pra ele esconda o conteúdo novamente 
*/

//Objetivo 1 - quando o usuário clicar no botão de seleção de plataforma deve abrir uma caixa com os botões de seleção de plataforma

//Passo 1 - pegar o botao de seleção de pataforma no js pra poder verificar quando o usuário clicar em cima dele

const botao = document.querySelector(".btn-plataforma");

//Passo 2 -pegar o elemento do conteúdo que precisa ser monstrado

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//Passo 3 - pegar o clique do usuário no js

botao.addEventListener("click", () => {
    // objetivo 2 - caso a lista de botões de plataformas ja esteja aparecendo e o usuário clicar no botão de fechar ,o conteúdo deve ser esconddido

   // const botaoestaaberto = elementoPlataformas.classList.contains("ativo");

    // Passo 1 - verificar se o botão já foi ativado pelo usuário, se sim , se devemos remover a classe ativo pra ele esconda o conteúdo novamente
    elementoPlataformas.classList.toggle("ativo")
    
   /* if(botaoestaaberto){
        elementoPlataformas.classList.remove("ativo");
    }else{
        // Passo 4 - quando usuário clicra , adicionar a classe ativo  na listagem de plataforma dentro do botão pra que o conteúdo apareça
        elementoPlataformas.classList.add("ativo")
    }*/

});
