$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/servicos.feature");
formatter.feature({
  "name": "Validar se o menu servicos e os submenus estao funcionais",
  "description": "  Como um usuario \n  Gostaria de abrir cada menu servicos",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Clicar no menu servicos e no submenu testes automatizados e validar a pagina",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@MENUSERVICOS"
    }
  ]
});
formatter.step({
  "name": "que estou na home",
  "keyword": "Dado "
});
formatter.step({
  "name": "clico no menu servicos",
  "keyword": "Quando "
});
formatter.step({
  "name": "no submenu \"\u003csubmenu\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "valido que estou na tela de \"\u003ctela\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "submenu",
        "tela"
      ]
    },
    {
      "cells": [
        "Testes Automatizados",
        "//Testes Automatizados"
      ]
    },
    {
      "cells": [
        "Testes Funcionais N Funcionais",
        "//Testes Funcionais N Funcionais"
      ]
    },
    {
      "cells": [
        "Testes Manuais",
        "//Testes Manuais"
      ]
    },
    {
      "cells": [
        "Testes Mobile",
        "//Testes Mobile"
      ]
    },
    {
      "cells": [
        "Fabrica de Testes",
        "//Fabrica de Testes"
      ]
    },
    {
      "cells": [
        "Consultoria",
        "//Consultoria"
      ]
    },
    {
      "cells": [
        "Crowdsourced Auditeste",
        "//Crowdsourced Auditeste"
      ]
    },
    {
      "cells": [
        "Alocacao de Profissionais",
        "//Alocacao de Profissionais"
      ]
    },
    {
      "cells": [
        "Automacao de Processos",
        "//Automacaoo de Processos"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Clicar no menu servicos e no submenu testes automatizados e validar a pagina",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@MENUSERVICOS"
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
  "status": "passed"
});
formatter.step({
  "name": "clico no menu servicos",
  "keyword": "Quando "
});
formatter.match({
  "location": "ServicosSteps.clico_no_menu_servicos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no submenu \"Testes Automatizados\"",
  "keyword": "E "
});
formatter.match({
  "location": "ServicosSteps.no_submenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que estou na tela de \"//Testes Automatizados\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ServicosSteps.valido_que_estou_na_tela_de(String)"
});
formatter.result({
  "error_message": "java.lang.Exception: Erro ao validar Tela\r\n\tat web.actions.ServicosAction.validarTela(ServicosAction.java:36)\r\n\tat web.steps.ServicosSteps.valido_que_estou_na_tela_de(ServicosSteps.java:25)\r\n\tat ✽.valido que estou na tela de \"//Testes Automatizados\"(file:src/test/resources/features/servicos.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Clicar no menu servicos e no submenu testes automatizados e validar a pagina",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@MENUSERVICOS"
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
  "status": "passed"
});
formatter.step({
  "name": "clico no menu servicos",
  "keyword": "Quando "
});
formatter.match({
  "location": "ServicosSteps.clico_no_menu_servicos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no submenu \"Testes Funcionais N Funcionais\"",
  "keyword": "E "
});
formatter.match({
  "location": "ServicosSteps.no_submenu(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Testes Funcionais N Funcionais\u0027)]\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-CFU3QO9\u0027, ip: \u0027192.168.15.189\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:62922}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9a67962257b2de1c32396509c0119687\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Testes Funcionais N Funcionais\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat web.actions.ServicosAction.clicarSubMenu(ServicosAction.java:26)\r\n\tat web.steps.ServicosSteps.no_submenu(ServicosSteps.java:20)\r\n\tat ✽.no submenu \"Testes Funcionais N Funcionais\"(file:src/test/resources/features/servicos.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "valido que estou na tela de \"//Testes Funcionais N Funcionais\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ServicosSteps.valido_que_estou_na_tela_de(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Clicar no menu servicos e no submenu testes automatizados e validar a pagina",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@MENUSERVICOS"
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
  "status": "passed"
});
formatter.step({
  "name": "clico no menu servicos",
  "keyword": "Quando "
});
formatter.match({
  "location": "ServicosSteps.clico_no_menu_servicos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no submenu \"Testes Manuais\"",
  "keyword": "E "
});
formatter.match({
  "location": "ServicosSteps.no_submenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que estou na tela de \"//Testes Manuais\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ServicosSteps.valido_que_estou_na_tela_de(String)"
});
formatter.result({
  "error_message": "java.lang.Exception: Erro ao validar Tela\r\n\tat web.actions.ServicosAction.validarTela(ServicosAction.java:37)\r\n\tat web.steps.ServicosSteps.valido_que_estou_na_tela_de(ServicosSteps.java:25)\r\n\tat ✽.valido que estou na tela de \"//Testes Manuais\"(file:src/test/resources/features/servicos.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Clicar no menu servicos e no submenu testes automatizados e validar a pagina",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@MENUSERVICOS"
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
  "status": "passed"
});
formatter.step({
  "name": "clico no menu servicos",
  "keyword": "Quando "
});
formatter.match({
  "location": "ServicosSteps.clico_no_menu_servicos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no submenu \"Testes Mobile\"",
  "keyword": "E "
});
formatter.match({
  "location": "ServicosSteps.no_submenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que estou na tela de \"//Testes Mobile\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ServicosSteps.valido_que_estou_na_tela_de(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div/h1[contains(text(),\u0027//Testes Mobile\u0027)]\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-CFU3QO9\u0027, ip: \u0027192.168.15.189\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63365}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e08687635a89f9b06ba2be39f6c3252d\n*** Element info: {Using\u003dxpath, value\u003d//div/h1[contains(text(),\u0027//Testes Mobile\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat web.actions.ServicosAction.validarTela(ServicosAction.java:31)\r\n\tat web.steps.ServicosSteps.valido_que_estou_na_tela_de(ServicosSteps.java:25)\r\n\tat ✽.valido que estou na tela de \"//Testes Mobile\"(file:src/test/resources/features/servicos.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Clicar no menu servicos e no submenu testes automatizados e validar a pagina",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@MENUSERVICOS"
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
  "status": "passed"
});
formatter.step({
  "name": "clico no menu servicos",
  "keyword": "Quando "
});
formatter.match({
  "location": "ServicosSteps.clico_no_menu_servicos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no submenu \"Fabrica de Testes\"",
  "keyword": "E "
});
formatter.match({
  "location": "ServicosSteps.no_submenu(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Fabrica de Testes\u0027)]\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-CFU3QO9\u0027, ip: \u0027192.168.15.189\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63556}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e3469915b0921339bcbcafa52e3d1c60\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Fabrica de Testes\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat web.actions.ServicosAction.clicarSubMenu(ServicosAction.java:26)\r\n\tat web.steps.ServicosSteps.no_submenu(ServicosSteps.java:20)\r\n\tat ✽.no submenu \"Fabrica de Testes\"(file:src/test/resources/features/servicos.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "valido que estou na tela de \"//Fabrica de Testes\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ServicosSteps.valido_que_estou_na_tela_de(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Clicar no menu servicos e no submenu testes automatizados e validar a pagina",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@MENUSERVICOS"
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
  "status": "passed"
});
formatter.step({
  "name": "clico no menu servicos",
  "keyword": "Quando "
});
formatter.match({
  "location": "ServicosSteps.clico_no_menu_servicos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no submenu \"Consultoria\"",
  "keyword": "E "
});
formatter.match({
  "location": "ServicosSteps.no_submenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que estou na tela de \"//Consultoria\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ServicosSteps.valido_que_estou_na_tela_de(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div/h1[contains(text(),\u0027//Consultoria\u0027)]\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-CFU3QO9\u0027, ip: \u0027192.168.15.189\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63732}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 75f6abaae9eefb9d05f201872d70eaf8\n*** Element info: {Using\u003dxpath, value\u003d//div/h1[contains(text(),\u0027//Consultoria\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat web.actions.ServicosAction.validarTela(ServicosAction.java:31)\r\n\tat web.steps.ServicosSteps.valido_que_estou_na_tela_de(ServicosSteps.java:25)\r\n\tat ✽.valido que estou na tela de \"//Consultoria\"(file:src/test/resources/features/servicos.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Clicar no menu servicos e no submenu testes automatizados e validar a pagina",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@MENUSERVICOS"
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
  "status": "passed"
});
formatter.step({
  "name": "clico no menu servicos",
  "keyword": "Quando "
});
formatter.match({
  "location": "ServicosSteps.clico_no_menu_servicos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no submenu \"Crowdsourced Auditeste\"",
  "keyword": "E "
});
formatter.match({
  "location": "ServicosSteps.no_submenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que estou na tela de \"//Crowdsourced Auditeste\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ServicosSteps.valido_que_estou_na_tela_de(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div/h1[contains(text(),\u0027//Crowdsourced Auditeste\u0027)]\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-CFU3QO9\u0027, ip: \u0027192.168.15.189\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63937}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ade01745754dc5fb77b36c0ae6ca1df3\n*** Element info: {Using\u003dxpath, value\u003d//div/h1[contains(text(),\u0027//Crowdsourced Auditeste\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat web.actions.ServicosAction.validarTela(ServicosAction.java:31)\r\n\tat web.steps.ServicosSteps.valido_que_estou_na_tela_de(ServicosSteps.java:25)\r\n\tat ✽.valido que estou na tela de \"//Crowdsourced Auditeste\"(file:src/test/resources/features/servicos.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Clicar no menu servicos e no submenu testes automatizados e validar a pagina",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@MENUSERVICOS"
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
  "status": "passed"
});
formatter.step({
  "name": "clico no menu servicos",
  "keyword": "Quando "
});
formatter.match({
  "location": "ServicosSteps.clico_no_menu_servicos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no submenu \"Alocacao de Profissionais\"",
  "keyword": "E "
});
formatter.match({
  "location": "ServicosSteps.no_submenu(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Alocacao de Profissionais\u0027)]\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-CFU3QO9\u0027, ip: \u0027192.168.15.189\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64122}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 53137ea54917da2cf377399da59d475d\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Alocacao de Profissionais\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat web.actions.ServicosAction.clicarSubMenu(ServicosAction.java:26)\r\n\tat web.steps.ServicosSteps.no_submenu(ServicosSteps.java:20)\r\n\tat ✽.no submenu \"Alocacao de Profissionais\"(file:src/test/resources/features/servicos.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "valido que estou na tela de \"//Alocacao de Profissionais\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ServicosSteps.valido_que_estou_na_tela_de(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Clicar no menu servicos e no submenu testes automatizados e validar a pagina",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@MENUSERVICOS"
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
  "status": "passed"
});
formatter.step({
  "name": "clico no menu servicos",
  "keyword": "Quando "
});
formatter.match({
  "location": "ServicosSteps.clico_no_menu_servicos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no submenu \"Automacao de Processos\"",
  "keyword": "E "
});
formatter.match({
  "location": "ServicosSteps.no_submenu(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Automacao de Processos\u0027)]\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-CFU3QO9\u0027, ip: \u0027192.168.15.189\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64298}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c808bc35f8aebcdfe78b4afee6f93102\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Automacao de Processos\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat web.actions.ServicosAction.clicarSubMenu(ServicosAction.java:26)\r\n\tat web.steps.ServicosSteps.no_submenu(ServicosSteps.java:20)\r\n\tat ✽.no submenu \"Automacao de Processos\"(file:src/test/resources/features/servicos.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "valido que estou na tela de \"//Automacaoo de Processos\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ServicosSteps.valido_que_estou_na_tela_de(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});