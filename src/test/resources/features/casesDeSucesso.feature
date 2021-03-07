#language: pt
@funcionais
Funcionalidade: Validar se o menu cases de sucesso e funcional
  
  Como um usuario 
  Gostaria de abrir menu cases de sucesso
  E validar se a pagina subsequente e do cases de sucesso

  @MENUCASESUCESSO
  Cenario: Clicar no menu cases de sucesso e validar a pagina
  	Dado que estou na home 
  	Quando clico no menu cases de sucesso
 		Entao valido que estou na tela cases de sucesso