# Script "Histórico", utilizado em conjunto com Google Sheets
Essa aplicação é uma função JavaScript destinada a compilar informações de uma planilha do Google Sheets.

## Descrição
1. Obtém a planilha ativa e a aba ativa dentro dessa planilha.
2. Identifica a última linha preenchida na aba.
3. Define um cabeçalho para as informações a serem compiladas, baseando-se nas colunas G a J.
4. Itera sobre cada linha da planilha (começando da segunda linha).
5. Verifica se determinada condição é atendida: se o valor na coluna D é "verdadeiro" e se as colunas G a J estão preenchidas.
6. Se a condição é atendida, compila as informações para essa linha, concatenando os valores das colunas G a J com seus respectivos cabeçalhos.
7. Adiciona essas informações compiladas na coluna 11 da mesma linha, podendo acrescentá-las a um histórico existente, se houver.
8. Limpa as informações das colunas G a J da linha processada.
9. Existe uma função auxiliar verificaColunasPreenchidas() para verificar se as colunas G a J estão preenchidas para uma determinada linha.

Em resumo, essa função automatiza a compilação e organização de informações específicas da planilha, adicionando-as em um formato específico em uma coluna determinada.

## Links Úteis
[Planilha de Modelo](https://docs.google.com/spreadsheets/d/1SccEtJxew4D-mV52F1mzbQ7umRBC0lI0_Q_CBKzoKnM/edit?usp=sharing)