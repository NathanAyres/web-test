$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/contato.feature");
formatter.feature({
  "name": "Validar se o menu contato e funcional",
  "description": "  Como um usuario \n  Gostaria de abrir menu contato\n  E validar se a pagina subsequente e de contato",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.scenario({
  "name": "Clicar no menu contato e validar a pagina",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@MENUCONTATO"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na home",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.que_estou_na_home()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d89.0.4389.82)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-DB2QFK7\u0027, ip: \u0027192.168.43.22\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.82, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\natha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54405}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 90d381361bfe0ca5178c7fb83eeac8e6\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"sgpb-popup-dialog-main-div-wrapper\"]/div/img}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat web.actions.HomeAction.fecharPopUp(HomeAction.java:14)\r\n\tat web.steps.HomeSteps.que_estou_na_home(HomeSteps.java:14)\r\n\tat ✽.que estou na home(file:src/test/resources/features/contato.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "clico no menu contato",
  "keyword": "Quando "
});
formatter.match({
  "location": "ContatoSteps.clico_no_menu_contato()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "valido que estou na tela contato",
  "keyword": "Entao "
});
formatter.match({
  "location": "ContatoSteps.valido_que_estou_na_tela_de_contato()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});