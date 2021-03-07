#language: pt
@funcionais
Funcionalidade: Validar se o menu quem somos e funcional
  
  Como um usuario 
  Gostaria de abrir menu quem somos
  E validar se a pagina subsequente e quem somos

  @MENUQUEMSOMOS
  Cenario: Clicar no menu quem somos e validar a pagina
  	Dado que estou na home 
  	Quando clico no menu quem somos
 		Entao valido que estou na tela quem somos