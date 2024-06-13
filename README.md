# Puppeteer Bots

## Visão Geral

Este repositório foi criado com o intuito de estudar sobre a biblioteca Puppeteer.

## Automações

### Bot de comentários

- **Arquivo:** `comment.js`
- **Descrição:** Faz login em uma conta do google e então faz um comentário em um video do youtube.

### Bot de conversão de moedas

- **Arquivo:** `currency.js`
- **Descrição:** Realiza uma pesquisa no google e retorna a conversão de uma moeda para a outra.

### Bot de ICMS

- **Arquivo:** `icms.js`
- **Descrição:** Realiza uma pesquisa no google e retorna o valor encontrado para o ICMS do estado especificado.

### Bot de pesquisa no youtube

- **Arquivo:** `youtubeSearch.js`
- **Descrição:** Abre a página do youtube e realiza uma pesquisa.

### Configuração do Ambiente
1. **Instalar Dependências:**
   ```bash
   npm install axios cheerio puppeteer puppeteer-extra puppeteer-extra-plugin-stealth readline-sync
2. **Execute um bot:**
   ```bash
   node bots/{nome-do-arquivo}
