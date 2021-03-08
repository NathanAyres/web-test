package web.actions;

import static org.junit.Assert.assertTrue;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import junit.framework.AssertionFailedError;
import web.core.ThreadDriver;

public class ServicosAction extends BaseActions{

	public ServicosAction(WebDriver driver) {
		super(driver);
	}
	
	public void abrirMenu() {
		WebElement menuContato = driver.findElement(By.xpath("//*[@id=\"menu-item-290\"]/a"));
		menuContato.click();

	}
	public void clicarSubMenu(String string) {
		WebElement subMenu = driver.findElement(By.xpath("//a[contains(text(),'"+string+"')]"));
		subMenu.click();
	}

	public void validarTela(String string) throws Exception {
		WebElement labelTela = driver.findElement(By.xpath("//div/h1[contains(text(),'"+string+"')]"));
		String tela = labelTela.getText();
		string.toUpperCase();
		if(tela.contains(string)){
			assertTrue(true);
		}else {
			throw new Exception("Erro ao validar Tela");
		}
	}
}
