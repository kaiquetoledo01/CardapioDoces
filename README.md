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
- `trufas.html`: trufas pequenas, grandes e de chocolate branco, com filtros por tamanho.
- `cones.html`: catálogo de cones trufados.
- Os cones são separados por preço: **Tradicionais (R$ 8,00)** e **Especiais (R$ 10,00)**.
- `ovos.html`: cascas e ovos de Páscoa recheados, com gramaturas e preços.

Para alterar uma foto, substitua o arquivo correspondente em `assets/images/` preservando o mesmo nome, ou atualize o caminho no objeto `IMAGES` de `script.js`.

## Estrutura

```text
index.html        estrutura semântica do cardápio
trufas.html       página das trufas
cones.html        página dos cones
ovos.html         página dos ovos de Páscoa
style.css         layout responsivo e visual editorial
script.js         catálogo, filtros e informações dos produtos
assets/images/    fotos de todos os doces
```

## Melhorias de apresentação — novembro de 2026

A abertura usa a fotografia em destaque, cores de chocolate e caramelo e uma chamada para explorar os doces. Os cards têm imagens maiores, preços destacados e textos legíveis. No celular, as trufas e os cones aparecem em duas colunas (uma em telas muito estreitas).

Os filtros anunciam a atualização para leitores de tela. O menu fecha com Esc ou clique fora, e o modo de movimento reduzido é respeitado. `CONFIG.showEasterProducts` oculta a seção e seus links.

O catálogo usa imagens JPEG otimizadas. Ao trocar uma foto, verifique o caminho efetivamente utilizado em `IMAGES`.

Validação local em 6 de novembro de 2026: sintaxe JavaScript, referências locais e dados do catálogo verificados. A limpeza foi comparada no Chrome em 30 estados das quatro páginas, com larguras de 360, 390, 760, 1000 e 1440 px, incluindo filtros e menu. As oito capturas de tela antes e depois ficaram idênticas. A comparação usou fontes de fallback, com o carregamento do Google Fonts bloqueado.

A página inicial apresenta as três categorias: **Pequenas tentações**, **Recheio até o fim** e **Ovos de Páscoa**. Cada botão abre sua própria página na mesma aba. Os produtos aparecem apenas na página correspondente. O menu, o rodapé e o link de retorno permitem navegar entre elas. Todas as páginas usam o mesmo `script.js` e `style.css`.

## Imagens dos cones

Os sete sabores usam imagens ilustrativas geradas com Imagegen, em `assets/images/cones/*-identidade.jpg`. Cada sabor tem composição, ingredientes em destaque e cenário próprios. As instruções de geração estão em `assets/images/cones/prompts.json`.

## Imagens dos ovos de Páscoa

Os sete ovos recheados e as três cascas usam imagens ilustrativas criadas com Imagegen, em `assets/images/ovos/identidade/*-identidade.jpg`. Cada sabor tem recheio, cobertura e cenário próprios; as cascas mostram o interior vazio e a textura do chocolate. Os prompts completos estão em `assets/images/ovos/identidade/prompts.json`.

Os arquivos usados pelo site são JPEG otimizados. As imagens dos ovos aparecem inteiras, com proporção quadrada no desktop e adaptação ao card no celular.

## Limpeza de partes sem uso

Foram removidas 56 imagens antigas ou alternativas sem referências ativas (cerca de 60,8 MB), dez entradas não consumidas de `IMAGES`, 13 regras CSS sem elementos correspondentes e os selos ocultos de novidade que nunca eram ativados. O template de produtos também foi removido de `ovos.html`, pois os ovos são construídos diretamente por `renderEggs()`.

Permanecem as 32 imagens utilizadas nas páginas e nos produtos, os prompts das imagens atuais, o servidor de prévia e `robots.txt`. Os dados dos produtos e o código das funções foram preservados, incluindo filtros, menu e configuração sazonal.
