package web.steps;

import io.cucumber.java.gl.Dado;
import io.cucumber.java.pt.Então;
import web.actions.HomeAction;
import web.core.ThreadDriver;

	public class HomeSteps {
		HomeAction contato = new HomeAction(ThreadDriver.getTDriver());
		
		
		@Dado("^que estou na home$")
		public void que_estou_na_home() throws Throwable {
			contato.fecharPopUp();
		}
		
		@Então("^valido que estou na tela home$")
		public void valido_que_estou_na_tela_de_contato() throws Throwable {
			
		}
	}
