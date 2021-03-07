#language: pt
@funcionais
Funcionalidade: Validar se o menu blog e funcional
  
  Como um usuario 
  Gostaria de abrir menu blog
  E validar se a pagina subsequente e do blog

  @MENUBLOG
  Cenario: Clicar no menu blog e validar a pagina
  	Dado que estou na home 
  	Quando clico no menu blog
 		Entao valido que estou na tela blog