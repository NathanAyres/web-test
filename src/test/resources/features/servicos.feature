# encoding: utf-8
#language: pt
@funcionais
Funcionalidade: Validar se o menu servicos e os submenus estao funcionais
  
  Como um usuario 
  Gostaria de abrir cada menu servicos
 

  @MENUSERVICOS
    Esquema do Cenario: Clicar no menu servicos e no submenu <submenu> e validar a pagina
  	Dado que estou na home 
  	Quando clico no menu servicos
  	E no submenu <submenu>
  	Entao valido que estou na tela de <tela>
  	
  	Exemplos:
  	
  	|submenu                         	  | tela                           	      |
    |"Testes Automatizados"          	  |  "//Testes Automatizados"             |
  	|"Testes Funcionais"								|  "//Testes Funcionais"						 		|
  	|"Testes Manuais"                   |  "//Testes Manuais"                   |
  	|"Testes Mobile"                    |  "//Testes Mobile"                    |
  	|"de Testes"               					|  "//de Testes"              					|
  	|"Consultoria"                      |  "//Consultoria"                      |
  	|"Crowdsourced Auditeste"           |  "//Crowdsourced Auditeste"           |
  	|"de Profissionais"      					  |  "//de Profissionais"     					  |
  	|"de Processos"       					    |  "//de Processos"          						|
					