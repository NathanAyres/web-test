package web.actions;

import static org.junit.Assert.assertTrue;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import junit.framework.AssertionFailedError;
import web.core.ThreadDriver;

public class ServicosAction extends BaseActions{

	public ServicosAction(WebDriver driver) {
		super(driver);
	}
	
	public void abrirMenu() {
		WebElement menuServicos = driver.findElement(By.xpath("//*[@id=\"menu-item-290\"]/a"));
		menuServicos.click();

	}
	public void clicarSubMenu(String string) throws Exception {
		String xpath = "//a[contains(text(),'"+string+"')]";
		WebElement subMenu = driver.findElement(By.xpath(xpath));
		Thread.sleep(1500);
		subMenu.click();
	}

	public void validarTela(String string) throws Exception {
		WebElement labelTela = driver.findElement(By.xpath("//div/h1[contains(text(),'"+string+"')]"));
		Thread.sleep(1000);
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
