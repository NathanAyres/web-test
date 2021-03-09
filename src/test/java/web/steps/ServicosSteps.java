package web.steps;


import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import web.actions.ServicosAction;
import web.core.ThreadDriver;

public class ServicosSteps {
	
	ServicosAction servicos = new ServicosAction(ThreadDriver.getTDriver());
	
	@Quando("^clico no menu servicos$")
	public void clico_no_menu_servicos() throws Throwable {
		servicos.abrirMenu();
	}
	
	@Quando("no submenu {string}")
	public void no_submenu(String string) throws Exception {
		servicos.clicarSubMenu(string);
	}

	@Entao("valido que estou na tela de {string}")
	public void valido_que_estou_na_tela_de(String string) throws Exception {
		servicos.validarTela(string);
	}
}
