package web.actions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ServicosAction extends BaseActions{

	public ServicosAction(WebDriver driver) {
		super(driver);
	}
	
	public void fecharPopUp() {
		//WebElement popUp = driver.findElement(By.id("menu-item-130"));NÃO TEM ID
		//popUp.click();

	}
	
	public void abrirMenu() {
		WebElement menuContato = driver.findElement(By.id("menu-item-130"));
		menuContato.click();

	}
	
	public boolean verificarContato() {
		driver.findElement(By.xpath("//div[@class='nav-a nav-a-2']")).click();
		WebElement btnFecharPedido = driver.findElement(By.xpath("//div[@class='a-box a-color-alternate-background sc-buy-box-inner-box']"));
		boolean validaCarrinho = btnFecharPedido.isDisplayed();
		return validaCarrinho;
	}
}
