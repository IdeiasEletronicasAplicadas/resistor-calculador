var omegaCaracter = "&#8486";

var ResistorCor = function(nome, faixa1, faixa2, multiplicador, tolerancia, hex) {
  this.nome = nome;
  this.faixa1 = faixa1;
  this.faixa2 = faixa2;
  this.multiplicador = multiplicador;
  this.tolerancia = tolerancia;
  this.hex = hex;
}

ResistorCor.prototype.faixa1ToTexto = function() {
  return this.nome + " - " + this.faixa1;
}

ResistorCor.prototype.faixa2ToTexto = function() {
  return this.nome + " - " + this.faixa2;
}

ResistorCor.prototype.multiplicadorToTexto = function() {
  return this.nome + " - " + resistenciaToString(this.multiplicador);
}

ResistorCor.prototype.toleranciaToTexto = function() {
  return this.nome + " - " +  this.tolerancia + "%";
}

function resistenciaToString(valor) {
  if(valor >= 1000000) {
    return (valor / 1000000) + 'M' + omegaCaracter;
  } else if(valor >= 1000) {
    return (valor / 1000) + 'K' + omegaCaracter;
  }
  return valor + omegaCaracter;
}

var cores = [
  new ResistorCor("Preto", 0, 0, 1, null, "#000000"),
  new ResistorCor("Marrom", 1, 1, 10, 1, "#663300"),
  new ResistorCor("Vermelho", 2, 2, 100, 2, "#ff0000"),
  new ResistorCor("Laranja", 3, 3, 1000, null, "#ff6633"),
  new ResistorCor("Amarelo", 4, 4, 10000, null, "#ffff00"),
  new ResistorCor("Verde", 5, 5, 100000, 0.5, "#00ae00"),
  new ResistorCor("Azul", 6, 6, 1000000, 0.25, "#0099ff"),
  new ResistorCor("Violeta", 7, 7, 10000000, 0.1, "#b579e5"),
  new ResistorCor("Cinza", 8, 8, null, 0.05, "#999999"),
  new ResistorCor("Branco", 9, 9, null, null, "#ffffff"),
  new ResistorCor("Dourado", null, null, 0.1, 5, "#ebc500"),
  new ResistorCor("Prata", null, null, 0.01, 10, "#cccccc")
];

var selecoesIds = [
  "faixa1",
  "faixa2",
  "multiplicador",
  "tolerancia"
];

var CalculadoraResistencia = function(faixa1, faixa2, multiplicador, tolerancia) {
  this.faixa1 = faixa1;
  this.faixa2 = faixa2;
  this.multiplicador = multiplicador;
  this.tolerancia = tolerancia;
}

CalculadoraResistencia.prototype.calcular = function() {
  return (this.faixa1*10 + this.faixa2)*this.multiplicador;
}

CalculadoraResistencia.prototype.calcularEObterTexto = function() {
  var resistencia = this.calcular();
  console.log(resistencia)
  return resistenciaToString(resistencia) + ' +/-' + this.tolerancia + "%";
}