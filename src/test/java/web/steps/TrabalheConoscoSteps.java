package web.steps;

import org.junit.Assert;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import web.actions.TrabalheConoscoAction;
import web.core.ThreadDriver;
import web.core.Utils;

public class TrabalheConoscoSteps {
	TrabalheConoscoAction contato = new TrabalheConoscoAction(ThreadDriver.getTDriver());
		
	
		@Quando("^clico no menu trabalhe conosco$")
		public void valido_a_pesquisa() throws Throwable {
			contato.abrirMenu();
		}
		
		@Entao("^valido que estou na trabalhe conosco$")
		public void valido_que_estou_na_tela_de_contato() throws Throwable {
			
		}

}