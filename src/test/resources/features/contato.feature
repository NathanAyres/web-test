#language: pt
@funcionais
Funcionalidade: Validar se o menu contato e funcional
  
  Como um usuario 
  Gostaria de abrir menu contato
  E validar se a pagina subsequente e de contato

  @MENUCONTATO
  Cenario: Clicar no menu contato e validar a pagina
  	Dado que estou na home
  	Quando clico no menu contato
 		Entao valido que estou na tela contato