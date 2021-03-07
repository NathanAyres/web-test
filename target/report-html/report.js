$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("compras.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Adicionar um item ao carrinho",
  "description": "\r\nComo um usuario \r\nGostaria de pesquisar um iten\r\nE adicionar esse item ao carrinho",
  "id": "adicionar-um-item-ao-carrinho",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@funcionais"
    }
  ]
});
formatter.before({
  "duration": 7005680100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Pesquisar um item e adicionar ao carrinho",
  "description": "",
  "id": "adicionar-um-item-ao-carrinho;pesquisar-um-item-e-adicionar-ao-carrinho",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@COMPRAS"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que pesquiso um iten no e-comerce amazon",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "valido a pesquisa",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "adiciono esse item ao carrinho",
  "keyword": "Entao "
});
formatter.step({
  "line": 14,
  "name": "valido se o iten se encontra no carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprasSteps.que_pesquiso_um_iten_no_e_comerce_amazon()"
});
formatter.result({
  "duration": 4241592000,
  "status": "passed"
});
formatter.match({
  "location": "ComprasSteps.valido_a_pesquisa()"
});
formatter.result({
  "duration": 74569700,
  "status": "passed"
});
formatter.match({
  "location": "ComprasSteps.adiciono_esse_item_ao_carrinho()"
});
formatter.result({
  "duration": 94060500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027a-section aok-relative s-image-fixed-height\u0027]/img[@src\u003d\u0027https://m.media-amazon.com/images/I/61Rr8uxmREL._AC_UY218_ML3_.jpg\u0027]\"}\n  (Session info: chrome\u003d89.0.4389.72)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-DB2QFK7\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.72, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\natha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61853}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bf2fa4fbd2168dab22124d34ecadcdb1\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027a-section aok-relative s-image-fixed-height\u0027]/img[@src\u003d\u0027https://m.media-amazon.com/images/I/61Rr8uxmREL._AC_UY218_ML3_.jpg\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat web.actions.ComprasAction.selecionarProduto(ComprasAction.java:31)\r\n\tat web.steps.ComprasSteps.adiciono_esse_item_ao_carrinho(ComprasSteps.java:28)\r\n\tat ✽.Entao adiciono esse item ao carrinho(compras.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComprasSteps.valido_se_o_iten_se_encontra_no_carrinho()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1101385200,
  "status": "passed"
});
});