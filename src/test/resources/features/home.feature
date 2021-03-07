#language: pt
@funcionais
Funcionalidade: Validar se o menu home e funcional
  
  Como um usuario 
  Gostaria de abrir menu home
  E validar se a pagina subsequente e da home

  @MENUHOME
  Cenario: Clicar no menu home e validar a pagina
  	Dado que estou na home
  	Quando clico no menu home
 		Entao valido que estou na tela home