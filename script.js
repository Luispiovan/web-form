function fnValidarDados() {
  if (document.frmContato.nome.value == "") {
    alert("Campo Nome obrigatorio!");
    document.frmContato.nome.focus();
  }
  if (document.frmContato.sobrenome.value == "") {
    alert("Campo Sobrenome obrigatorio!");
    document.frmContato.sobrenome.focus();
  } else if (document.frmContato.email.value == "") {
    alert("Campo E-Mail obrigatorio!");
    document.frmContato.email.focus();
  } else if (
    document.frmContato.senioridade.options[
      document.frmContato.senioridade.selectedIndex
    ].value == ""
  ) {
    alert("Campo Senioridade obrigatorio!");
    document.frmContato.senioridade.focus();
  } else {
    document.frmContato.action = "https://github.com/luispiovan";
    document.frmContato.submit();
  }
  return false;
}

//----------------------------VALIDAÇÕES-------------------------------//
//valida email
function ValidaEmail(email) {
  exp = /^[\w-]+(\.[\w-]+)*@(([\w-]{2,63}\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
  if (!exp.test(email.value)) alert("E-mail Invalido!");
}

//valida telefone
function ValidaCep(numero) {
  exp = /\d{8}/;
  if (!exp.test(numero.value)) alert("Cep Invalido!");
}

//valida telefone
function ValidaTelefone(tel) {
  exp = /\(\d{2}\)\ \d{4}\-\d{4}/;
  if (!exp.test(tel.value)) alert("Numero de Telefone Invalido!");
}

//valida telefone
function ValidaTelefoneSP(tel) {
  exp = /\(\d{2}\)\ \d{5}\-\d{4}/;
  if (!exp.test(tel.value)) alert("Numero de Telefone Invalido!");
}

//valida telefone
function ValidaTelefoneCel(tel) {
  exp = /\d{5}\-\d{4}/;
  if (!exp.test(tel.value)) alert("Numero de Telefone Invalido!");
}

//valida telefone2
function ValidaTelefoneSP2(tel) {
  exp = /\d{4}\-\d{4}/;
  if (!exp.test(tel.value)) alert("Numero de Telefone Invalido!");
}

//adiciona mascara ao cep
function MascaraCEP(numero) {
  if (mascaraInteiro(numero) == false) {
    event.returnValue = false;
  }
  return formataCampo(numero, "00000000", event);
}

//adiciona mascara ao telefone
function MascaraDDD(tel) {
  if (mascaraInteiro(tel) == false) {
    event.returnValue = false;
  }
  return formataCampo(tel, "00", event);
}

//adiciona mascara ao telefone
function MascaraTelefoneCel(tel) {
  if (mascaraInteiro(tel) == false) {
    event.returnValue = false;
  }
  return formataCampo(tel, "00000-0000", event);
}

//adiciona mascara ao telefone
function MascaraTelefoneSP(tel) {
  if (mascaraInteiro(tel) == false) {
    event.returnValue = false;
  }
  return formataCampo(tel, "(00) 00000-0000", event);
}

//adiciona mascara ao telefone
function MascaraTelefone(tel) {
  if (mascaraInteiro(tel) == false) {
    event.returnValue = false;
  }
  return formataCampo(tel, "(00) 0000-0000", event);
}

//adiciona mascara ao telefone
function MascaraTelefoneSP2(tel) {
  if (mascaraInteiro(tel) == false) {
    event.returnValue = false;
  }
  return formataCampo(tel, "0000-0000", event);
}

//valida numero inteiro com mascara
function mascaraInteiro() {
  if (event.keyCode < 48 || event.keyCode > 57) {
    event.returnValue = false;
    return false;
  }
  return true;
}

//valida Datas
function ValidaData(strData) {
  exp = /\d{2}\/\d{2}\/\d{4}/;
  if (!exp.test(strData.value)) alert("Data Invalida!");
}

//adiciona mascara a Datas
function MascaraData(strData) {
  if (mascaraInteiro(strData) == false) {
    event.returnValue = false;
  }
  return formataCampo(strData, "00/00/0000", event);
}

//valida Hora
function ValidaHora(strHora) {
  exp = /\d{2}\:\d{2}/;
  if (!exp.test(strHora.value)) alert("Hora Invalida!");
}

//adiciona mascara a Hora
function MascaraHora(strHora) {
  if (mascaraInteiro(strHora) == false) {
    event.returnValue = false;
  }
  return formataCampo(strHora, "00:00", event);
}

//formata de forma generica os campos
function formataCampo(campo, Mascara, evento) {
  var boleanoMascara;

  var Digitato = evento.keyCode;
  exp = /\-|\.|\/|\(|\)| /g;
  campoSoNumeros = campo.value.toString().replace(exp, "");

  var posicaoCampo = 0;
  var NovoValorCampo = "";
  var TamanhoMascara = campoSoNumeros.length;

  if (Digitato != 8) {
    // backspace
    for (i = 0; i <= TamanhoMascara; i++) {
      boleanoMascara =
        Mascara.charAt(i) == "-" ||
        Mascara.charAt(i) == "." ||
        Mascara.charAt(i) == "/";
      boleanoMascara =
        boleanoMascara ||
        (Mascara.charAt(i) == "(" ||
          Mascara.charAt(i) == ")" ||
          Mascara.charAt(i) == " ");
      if (boleanoMascara) {
        NovoValorCampo += Mascara.charAt(i);
        TamanhoMascara++;
      } else {
        NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
        posicaoCampo++;
      }
    }
    campo.value = NovoValorCampo;
    return true;
  } else {
    return true;
  }
}

//valida RG
function ValidaRG(RG) {
  exp = /\d{2}\\.\d{3}\.\d{3}\-\d{1}/;
  //	            if (!exp.test(RG.value))
  //	                alert('RG Invalido!');
}

function MascaraRG(RG) {
  return formataCampo(RG, "00.000.000-0", event);
}

//valida CPF
function ValidaCPF(CPF) {
  exp = /\d{3}\\.\d{3}\.\d{3}-\.\d{2}/;
  //	            if (!exp.test(CPF.value))
  //	                alert('CPF Invalido!');
}

function MascaraCPF(CPF) {
  if (mascaraInteiro(CPF) == false) {
    event.returnValue = false;
  }
  return formataCampo(CPF, "000.000.000-00", event);
}

//valida IE
function ValidaIE(IE) {
  exp = /\d{3}\\.\d{3}\.\d{3}/;
  //	            if (!exp.test(IE.value))
  //	                alert('Inscr. estádual Invalida!');
}

function MascaraIE(IE) {
  if (mascaraInteiro(IE) == false) {
    event.returnValue = false;
  }
  return formataCampo(IE, "000.000.000", event);
}

//valida CNPJ
function ValidaCNPJ(CNPJ) {
  exp = /\d{2}\\.\d{3}\.\d{3}\/\d{4}\-\d{2}/;
  //	            if (!exp.test(CNPJ.value))
  //	                alert('CNPJ Invalido!');
}

function MascaraCNPJ(CNPJ) {
  if (mascaraInteiro(CNPJ) == false) {
    event.returnValue = false;
  }
  return formataCampo(CNPJ, "00.000.000/0000-00", event);
}

function ValidarDigitoCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}

function ValidarDigitoCNPJ(str) {
  str = str.replace(".", "");
  str = str.replace(".", "");
  str = str.replace(".", "");
  str = str.replace("-", "");
  str = str.replace("/", "");
  cnpj = str;
  var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
  digitos_iguais = 1;
  if (cnpj.length < 14 && cnpj.length < 15) return false;
  for (i = 0; i < cnpj.length - 1; i++)
    if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
      digitos_iguais = 0;
      break;
    }
  if (!digitos_iguais) {
    tamanho = cnpj.length - 2;
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) return false;
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) return false;
    return true;
  } else return false;
}
