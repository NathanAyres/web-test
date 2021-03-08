package web.steps;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import web.core.DriverFactory;
import web.core.IBrowser;
import web.core.ThreadDriver;

public class Hooks {

	@Before
	public void beforeScenario() throws Exception {

		IBrowser browser = DriverFactory.getInstance().getBrowser();
		browser.setupBrowser();

	}

	@After()
	public void fecharBrowser() {
		ThreadDriver.getTDriver().quit();
		System.out.println("terminando");
	}

}
