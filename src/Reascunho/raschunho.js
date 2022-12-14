// Entendendo o JSX 

//O JSX é como um html porem dentro do código Js

//É a principal maneira de escrever HTML comm react;

/*No react uma tag deve ser sempre fechada msm sendo uma img que é uma self close*//*No react uma tag deve ser sempre fechada msm sendo uma img que é uma self close*/

/*Class no react é className="" */



//Compomentes
/*Permite dividir a aplicação em partes;
Os componentes renderizam um JSX, assim como App.js (Que é um componente);
Precisamos importalo para o nosso App.js
Normalmente a pagina chama components e fica na pasta src */



/*PROPS
As props são valores passados para componentes;
Podemos deixa-los dinâmicos;
Ou seja, mudando a execução por causa do valor da prop;
O valor é passado como um atributo na chamado do componente;
As props são somente leitura;
*/

/*
FRAGMENTOS

Fragmentos _ Permite a criação de um elemento sem um elemento pai;

O propósito é descomplicar os nós do DOM;
A sintaxe é <>  e </>, não há um nome para a tag;
Criamos no próprio JSX;

*/


/*PROPS  AVANÇANDO

Podemos definir tipos para as prop, realizando uma espécie de validação;

Definimos em um objeo chamado propTypes no próprio componente;

E ainda há posibilidade de definir um valor por padra usando o "defaultProps";

*/

/*
EVENTOS REACT

Os eventos de React são os mesmo eventos do DOM;

Geralmente um método é atribuido ao evento;

Este método deve ser criado no componente;



*/

/*
useState

O useState é um hook do React;

Com ele conseguimos manusear o estado de um componente de forma simples;

este hook funciona muito bem com eventos;

Podemos atrelar um evento a mudança de state;

*/


/*
Métodos por props

Os métodos também podem ser passados por props;
Ou seja, um componente filho pode ativar o método do seu ancestral;
Vamos acessar o método por meio de um evento;
A sintaxe é a mesma de uma props de dados; props.meuEvento;

*/



/*
Renderização por condição

Podemos atrelas a exibição de algum elemento a um if;

Esta ação é chamada de renderização condicional;

Envolvemos as tags em chaves {};

Como as chaves executam JavaScript, criamos nossa condição;

É possivel usar state para criar as condições;
*/

/*
 RENDERIZAÇÃO DE LISTAS
 
 Para renderizar uma lista vamos primeiramente precisar de um array;

 Depois ultilizamos a função map, para percorrer cada um dos itens;

 Podendo assim renderizar algo na tela;

 É possível unir operadores condicionais com a renderização de listas;
 */


/*
STATE LIFT

State lift é um técnica utilizada para compartilhar o state;

É normal vários componentes dependederem do mesmo estado;

 Então precisamos elevar o nível do mesmo a um componente pai;

 Então centralizamos o state no pai, e definimos quem usa e quem define o (setState);


 */

 /*
 REACT ROUTER

 O React router é um pacote para mudanças de URLs da aplicação.

 Podemos assim acessar outras views, sem o page reload;

 Trocando apenas uma parte do layout da aplicação, ou seja, o que muda de view para view;

 Precisamos instalar este pacote no projeto.

 E também realizar algumas mudanças em como o App é estruturado;
 */


 /*
 
 React Icons

 O React Icons é um pacote de ícones externo;

 Precisamos adicionar ao projeto através do npm;

 Ele nos permite adicionar Ícones ao projeto com uma sintaxe parecida a de componentes;

 Além disso há uma grande quantidade de ícones disponíveis;
  
 */

