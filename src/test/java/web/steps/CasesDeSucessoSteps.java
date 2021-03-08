package web.steps;

import org.junit.Assert;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import web.actions.CasesDeSucessoAction;
import web.core.ThreadDriver;
import web.core.Utils;

public class CasesDeSucessoSteps {
	
	CasesDeSucessoAction casesDeSucesso = new CasesDeSucessoAction(ThreadDriver.getTDriver());

		@Quando("^clico no menu cases de sucesso$")
		public void clico_no_menu_cases_de_sucesso() throws Throwable {
			casesDeSucesso.abrirMenu();
		}
		
		@Entao("^valido que estou na tela cases de sucesso$")
		public void valido_que_estou_na_tela_de_contato() throws Throwable {
			casesDeSucesso.validarTela("//CASES DE SUCESSO");
		}

	}