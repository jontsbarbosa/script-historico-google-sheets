function compilarInformacoes() {
    var planilha = SpreadsheetApp.getActiveSpreadsheet();
    var abaAtiva = planilha.getActiveSheet();
    var ultimaLinha = abaAtiva.getLastRow();
    var cabecalho = abaAtiva.getRange(1, 7, 1, 4).getValues()[0];
    
    // Compilar informações para cada linha da planilha, começando da segunda linha
    for (var linha = 2; linha <= ultimaLinha; linha++) {

      // Verifica se a coluna D contém tem a validação correta (Na aplicação, foi utilizado "Enviar FUP") e se as colunas G:J estão preenchidas
      if (abaAtiva.getRange(linha, 4).getValue() === "Enviar FUP" && verificaColunasPreenchidas(linha, abaAtiva)) {
        var informacoesCompiladas = [];

        // Loop através do cabeçalho para compilar as informações
        for (var i = 0; i < cabecalho.length; i++) {

          // Obtém o valor da célula na coluna correspondente e na mesma linha
          var valorCelula = abaAtiva.getRange(linha, 7 + i).getValue();

          // Adiciona o cabeçalho e o valor da célula compilados ao array
          informacoesCompiladas.push(cabecalho[i] + ": " + valorCelula);
        }

        // Recupera o valor atual da célula na coluna 11
        var valorAtualColuna11 = abaAtiva.getRange(linha, 11).getValue();

        // Se a célula na coluna 11 estiver vazia, define as informações compiladas diretamente
        if (valorAtualColuna11 === "") {
          abaAtiva.getRange(linha, 11).setValue(informacoesCompiladas.join("\n"));
        } else {

          // Se a célula na coluna 11 já contém histórico, adiciona um intervalo de uma linha antes de inserir as novas informações
          abaAtiva.getRange(linha, 11).setValue(valorAtualColuna11 + "\n\n" + informacoesCompiladas.join("\n"));
        }

        // Limpa as informações das colunas G:J
        abaAtiva.getRange(linha, 7, 1, 4).clearContent();
      }
    }
  }
  // Função para verificar se as colunas G:J estão preenchidas para uma determinada linha
  function verificaColunasPreenchidas(linha, aba) {
    for (var coluna = 7; coluna <= 10; coluna++) {
      if (aba.getRange(linha, coluna).getValue() === "") {
        return false;
      }
    }
    return true;
  }