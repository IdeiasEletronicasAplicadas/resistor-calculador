(function() {
  window.onload = function(event) {
    inicializarSelecoes();
  };
  
  function inicializarSelecoes() {
    var selecaoId = "";
    for(var i = 0; i < selecoesIds.length; i++) {
      selecaoId = selecoesIds[i];
      adicionarOpcoesASelecao(selecaoId);
      adicionarEventoDeMudancaASelecao(selecaoId);
    }
    var valorTexto = calcularResistencia();
    mudarTextoResultado(valorTexto);
  }
  
  function adicionarOpcoesASelecao(selecaoId) {
    var selecao = document.getElementById(selecaoId);
    var coresDaSelecao = obterOpcoesValidasDaSelecao(selecaoId);
    for(var i = 0; i < coresDaSelecao.length; i++) {
      var corAtual = coresDaSelecao[i];
      var option = criarOpcao(corAtual[selecaoId], corAtual.nome.toLowerCase(), corAtual[selecaoId + "ToTexto"]());
      selecao.appendChild(option);
    }
  }

  function adicionarEventoDeMudancaASelecao(selecaoId) {
    var selecao = document.getElementById(selecaoId)
    selecao.addEventListener("change", function(evento){
      var valorTexto = calcularResistencia();
      mudarTextoResultado(valorTexto);
    });
  }
  
  function obterOpcoesValidasDaSelecao(selecao) {
    return cores.filter(function(cor) {
      return cor[selecao];
    });
  }
  
  function criarOpcao(valor, classe, conteudo) {
    var option = document.createElement("option");
    option.value = valor;
    var span = document.createElement("span");
    span.innerHTML=conteudo;
    option.appendChild(span);
    span.className = "cor "+classe;
    return option;
  }

  function calcularResistencia() {
    var selecao1 = document.getElementById(selecoesIds[0]);
    var selecao2 = document.getElementById(selecoesIds[1]);
    var selecaoMultiplicador = document.getElementById(selecoesIds[2]);
    var selecaoTolerancia = document.getElementById(selecoesIds[3]);
    var faixa1 = +selecao1.options[selecao1.selectedIndex].value;
    var faixa2 = +selecao2.options[selecao2.selectedIndex].value;
    var multiplicador = +selecaoMultiplicador.options[selecaoMultiplicador.selectedIndex].value;
    var tolerancia = +selecaoTolerancia.options[selecaoTolerancia.selectedIndex].value;
    var calculadora = new CalculadoraResistencia(faixa1, faixa2, multiplicador, tolerancia);
    return calculadora.calcularEObterTexto();
  }

  function mudarTextoResultado(resultadoTexto) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML = resultadoTexto;
  }
})();