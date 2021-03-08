package web.actions;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CasesDeSucessoAction extends BaseActions{

	public CasesDeSucessoAction(WebDriver driver) {
		super(driver);
	}
	
	public void abrirMenu() {
		WebElement menuCasesDeSucesso = driver.findElement(By.xpath("//*[@id=\"menu-item-392\"]/a"));
		menuCasesDeSucesso.click();

	}
	
	public void validarTela(String string) throws Exception {
		WebElement labelTela = driver.findElement(By.xpath("//*[@id=\"TITULO-SITE\"]/div[1]/div/div/div/h1"));
		String tela = labelTela.getText();
		string.toUpperCase();
		string = string.toUpperCase();
		if(tela.contains(string)){
			assertTrue(true);
		}else {
			throw new Exception("Erro ao validar Tela");
		}
	}
}
