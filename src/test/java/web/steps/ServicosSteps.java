package web.steps;

import org.junit.Assert;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import web.actions.ContatoAction;
import web.core.ThreadDriver;
import web.core.Utils;

public class ServicosSteps {
	ContatoAction contato = new ContatoAction(ThreadDriver.getTDriver());
	
	
	@Dado("^que estou na home$")				//Testes Automatizados
	public void que_estou_na_home() throws Throwable {
		contato.fecharPopUp();
	}

	@Quando("^clico no menu servicos$")
	public void valido_a_pesquisa() throws Throwable {
		contato.abrirMenu();
	}
	
	@E("^no submenu testes automatizados$")
	public void valido_se_o_iten_se_encontra_no_carrinho() throws Throwable {
		//Assert.assertTrue(compras.verificarCarrinho());
	}
	
	@Entao("^valido que estou na tela de testes automatizados$")
	public void valido_que_estou_na_tela_de_contato() throws Throwable {
		
	}
	
	
	
	

}
