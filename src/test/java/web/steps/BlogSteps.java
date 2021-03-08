package web.steps;

import org.junit.Assert;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import web.actions.BlogAction;
import web.core.ThreadDriver;
import web.core.Utils;

public class BlogSteps {
	
	BlogAction blog = new BlogAction(ThreadDriver.getTDriver());
	
	@Quando("^clico no menu blog$")
	public void clico_no_menu_blog() throws Throwable {
		blog.abrirMenu();
	}
	
	@Entao("^valido que estou na tela blog$")
	public void valido_que_estou_na_tela_blog() throws Throwable {
		blog.validarTela("//BLOG");
	}

}
