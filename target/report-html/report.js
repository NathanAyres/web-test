$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/home.feature");
formatter.feature({
  "name": "Validar se o menu home e funcional",
  "description": "  Como um usuario \n  Gostaria de abrir a home",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.scenario({
  "name": "Clicar no menu home e validar a pagina",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@MENUHOME"
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
  "name": "valido que estou na tela home",
  "keyword": "Entao "
});
formatter.match({
  "location": "HomeSteps.valido_que_estou_na_tela_home()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/quemSomos.feature");
formatter.feature({
  "name": "Validar se o menu quem somos e funcional",
  "description": "  Como um usuario \n  Gostaria de abrir menu quem somos\n  E validar se a pagina subsequente e quem somos",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.scenario({
  "name": "Clicar no menu quem somos e validar a pagina",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@funcionais"
    },
    {
      "name": "@MENUQUEMSOMOS"
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
  "name": "clico no menu quem somos",
  "keyword": "Quando "
});
formatter.match({
  "location": "QuemSomosSteps.clico_no_menu_quem_somos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido que estou na tela quem somos",
  "keyword": "Entao "
});
formatter.match({
  "location": "QuemSomosSteps.valido_que_estou_na_tela_quem_somos()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/servicos.feature");
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
  "name": "Clicar no menu servicos e no submenu \u003csubmenu\u003e e validar a pagina",
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
  "name": "no submenu \u003csubmenu\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "valido que estou na tela de \u003ctela\u003e",
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
        "\"Testes Automatizados\"",
        "\"//Testes Automatizados\""
      ]
    },
    {
      "cells": [
        "\"Testes Funcionais\"",
        "\"//Testes Funcionais\""
      ]
    },
    {
      "cells": [
        "\"Testes Manuais\"",
        "\"//Testes Manuais\""
      ]
    },
    {
      "cells": [
        "\"Testes Mobile\"",
        "\"//Testes Mobile\""
      ]
    },
    {
      "cells": [
        "\"de Testes\"",
        "\"//de Testes\""
      ]
    },
    {
      "cells": [
        "\"Consultoria\"",
        "\"//Consultoria\""
      ]
    },
    {
      "cells": [
        "\"Crowdsourced Auditeste\"",
        "\"//Crowdsourced Auditeste\""
      ]
    },
    {
      "cells": [
        "\"de Profissionais\"",
        "\"//de Profissionais\""
      ]
    },
    {
      "cells": [
        "\"de Processos\"",
        "\"//de Processos\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Clicar no menu servicos e no submenu \"Testes Automatizados\" e validar a pagina",
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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Clicar no menu servicos e no submenu \"Testes Funcionais\" e validar a pagina",
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
