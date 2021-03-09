package web.actions;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomeAction extends BaseActions{

	public HomeAction(WebDriver driver) {
		super(driver);
	}
	
	public void fecharPopUp() {
		WebElement popUp = driver.findElement(By.xpath("//*[@id=\"sgpb-popup-dialog-main-div-wrapper\"]/div/img"));
		popUp.click();

	}
	
	public void validarTela(String string) throws Exception {
		WebElement labelTela = driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[9]/div/div/div/div/h3/b"));
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