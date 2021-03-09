package web.actions;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class TrabalheConoscoAction extends BaseActions{

	public TrabalheConoscoAction(WebDriver driver) {
		super(driver);
	}
	
	public void abrirMenu() {
		WebElement menuTrabalheConosco = driver.findElement(By.xpath("//*[@id=\"menu-item-135\"]/a"));
		menuTrabalheConosco.click();

	}
	
	public void validarTela(String string) throws Exception {
		WebElement labelTela = driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[1]/div[1]/div/div/div/h1"));
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
