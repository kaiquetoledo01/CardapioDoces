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

## Melhorias de apresentação — novembro de 2026

A abertura usa a fotografia em destaque, cores de chocolate e caramelo e uma chamada para explorar os doces. Os cards têm imagens maiores, preços destacados e textos legíveis. No celular, as trufas e os cones aparecem em duas colunas (uma em telas muito estreitas).

Os filtros anunciam a atualização para leitores de tela. O menu fecha com Esc ou clique fora, e o modo de movimento reduzido é respeitado. `CONFIG.showEasterProducts` oculta a seção e seus links.

As imagens PNG possuem cópias JPEG otimizadas, usadas pelo catálogo. Os PNG originais foram preservados para futuras edições. Ao trocar uma foto, verifique o caminho efetivamente utilizado em `IMAGES`.

Validação: sintaxe JavaScript, referências locais e dados do catálogo verificados. A revisão visual em navegador e celular continua pendente, pois o serviço de navegador estava indisponível nesta sessão.
