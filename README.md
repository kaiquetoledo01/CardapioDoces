# Doce & Afeto — cardápio artesanal

Um site estático de apresentação para trufas, cones recheados e ovos de Páscoa. Ele funciona como um mostruário: não há carrinho, checkout, formulário de compra ou redirecionamento para pedido.

## Abrir localmente

Abra o arquivo `index.html` no navegador ou sirva a pasta com um servidor HTTP simples. Com Node.js instalado:

```powershell
node preview-server.cjs
```

Depois, acesse o endereço informado no terminal.

## Onde editar o conteúdo

- `script.js`: nome da marca, produtos, descrições, preços, sabores e opção de ocultar a seção de Páscoa.
- `assets/images/`: fotos usadas pelo mostruário.
- `style.css`: aparência, tamanhos dos cards e comportamento responsivo.
- `index.html`: estrutura, textos institucionais e navegação do cardápio.

Para alterar uma foto, substitua o arquivo correspondente em `assets/images/` preservando o mesmo nome, ou atualize o caminho no objeto `IMAGES` de `script.js`.

## Estrutura

```text
index.html        estrutura semântica do cardápio
style.css         layout responsivo e visual editorial
script.js         catálogo, filtros e informações dos produtos
assets/images/    fotos de todos os doces
```
