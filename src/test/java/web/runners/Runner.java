package web.runners;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/", glue = "web.steps", 
				 tags = {"@MENUHOME, @MENUQUEMSOMOS,@MENUSERVICOS, @MENUCASESDESUCESSO, @MENUTRABALHECONOSCO, @MENUBLOG, @MENUCONTATO" },
				 plugin = { "pretty", "html:target/report-html","json:target/report.json" },
				 monochrome = true,  
				 dryRun = false, strict = false)
public class Runner {

	@BeforeClass
	public static void run() {
	}
	
	
}
