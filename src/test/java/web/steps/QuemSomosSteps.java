package web.steps;

import org.junit.Assert;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import web.actions.QuemSomosAction;
import web.core.ThreadDriver;
import web.core.Utils;

public class QuemSomosSteps {
	QuemSomosAction contato = new QuemSomosAction(ThreadDriver.getTDriver());
		
		
		@Dado("^que estou na home$")
		public void que_estou_na_home() throws Throwable {
			contato.fecharPopUp();
		}
	
		@Quando("^clico no menu quem somos$")
		public void valido_a_pesquisa() throws Throwable {
			contato.abrirMenu();
		}
		
		@Entao("^valido que estou na tela quem somos$")
		public void valido_que_estou_na_tela_de_contato() throws Throwable {
			
		}

}
