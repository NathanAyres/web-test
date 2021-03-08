package web.steps;

import org.junit.Assert;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import web.actions.QuemSomosAction;
import web.core.ThreadDriver;
import web.core.Utils;

public class QuemSomosSteps {
	QuemSomosAction quemSomos = new QuemSomosAction(ThreadDriver.getTDriver());
		
	
		@Quando("^clico no menu quem somos$")
		public void clico_no_menu_quem_somos() throws Throwable {
			quemSomos.abrirMenu();
		}
		
		@Entao("^valido que estou na tela quem somos$")
		public void valido_que_estou_na_tela_quem_somos() throws Throwable {
			quemSomos.validarTela("//QUEM SOMOS");
		}

}
