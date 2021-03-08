#language: pt
@funcionais
Funcionalidade: Validar se o menu servicos e os submenus estao funcionais
  
  Como um usuario 
  Gostaria de abrir cada menu servicos
 

  @MENUSERVICOS
    Esquema do Cenario: Clicar no menu servicos e no submenu testes automatizados e validar a pagina
  	Dado que estou na home 
  	Quando clico no menu servicos
  	E no submenu "<submenu>"
  	Entao valido que estou na tela de "<tela>"
  	
  	Exemplos:
  	
  	|submenu                         | tela                                |
    |Testes Automatizados            |  //Testes Automatizados             |
  	|Testes Funcionais N Funcionais  |  //Testes Funcionais N Funcionais   |
  	|Testes Manuais                  |  //Testes Manuais                   |
  	|Testes Mobile                   |  //Testes Mobile                    |
  	|Fabrica de Testes               |  //Fabrica de Testes                |
  	|Consultoria                     |  //Consultoria                      |
  	|Crowdsourced Auditeste          |  //Crowdsourced Auditeste           |
  	|Alocacao de Profissionais       |  //Alocacao de Profissionais        |
  	|Automacao de Processos          |  //Automacaoo de Processos           |
	