const CONFIG = {
  brandName: "Doce & Afeto",
  showEasterProducts: true,
  locale: "pt-BR",
  currency: "BRL",
};

const IMAGES = {
  truffleAlpino: "assets/images/trufa-alpino.jpg",
  truffleDulceDeLeche: "assets/images/trufa-doce-de-leite.jpg",
  truffleNinhoAlpino: "assets/images/trufa-ninho-alpino.jpg",
  truffleNinhoAlpinoLargeMilk: "assets/images/trufa-ninho-alpino-grande-leite.png",
  trufflePrestige: "assets/images/trufa-prestigio.jpg",
  trufflePrestigeWhite: "assets/images/trufa-prestigio-branco.png",
  truffleSensation: "assets/images/trufa-sensacao.jpg",
  truffleSensationLargeMilk: "assets/images/trufa-sensacao-grande-leite.png",
  truffleOvomaltine: "assets/images/trufa-ovomaltine.jpg",
  truffleKinder: "assets/images/trufa-kinder.jpg",
  truffleCookies: "assets/images/trufa-cookies-cream.jpg",
  truffleCookiesMilk: "assets/images/trufa-cookies-cream-leite.png",
  coneAlpino: "assets/images/cone-alpino.jpg",
  coneNinho: "assets/images/cone-ninho.jpg",
  conePrestige: "assets/images/cone-prestigio.jpg",
  coneOvomaltine: "assets/images/cone-ovomaltine.jpg",
  coneFerrero: "assets/images/cone-ferrero.jpg",
  coneKinder: "assets/images/cone-kinder.jpg",
  coneCookies: "assets/images/cone-cookies-cream.jpg",
  eggAlpino: "assets/images/ovos/ovo-alpino.png",
  eggNinhoAlpino: "assets/images/ovos/ovo-ninho-alpino.png",
  eggPrestige: "assets/images/ovos/ovo-prestigio.png",
  eggOvomaltine: "assets/images/ovos/ovo-ovomaltine.png",
  eggOreo: "assets/images/ovos/ovo-oreo.png",
  eggFerrero: "assets/images/ovos/ovo-ferrero.png",
  eggNinho: "assets/images/ovos/ovo-ninho.png",
  shellMilkChocolate: "assets/images/ovos/casca-chocolate-leite.png",
  shellWhiteChocolate: "assets/images/ovos/casca-chocolate-branco.png",
  shellCrunchy: "assets/images/ovos/casca-crocante.png",
};

const PRODUCTS = [
  { id: "t-alpino-p", filter: "small", chocolate: "milk", size: "Trufa pequena · chocolate ao leite", name: "Alpino", price: 3, image: IMAGES.truffleAlpino, description: "Chocolate ao leite e recheio cremoso." },
  { id: "t-doce-p", filter: "small", chocolate: "milk", size: "Trufa pequena · chocolate ao leite", name: "Doce de Leite", price: 3, image: IMAGES.truffleDulceDeLeche, description: "Recheio aveludado de doce de leite." },
  { id: "t-ninho-p", filter: "small", chocolate: "white", size: "Trufa pequena · chocolate branco", name: "Ninho com Alpino", price: 3, image: IMAGES.truffleNinhoAlpino, description: "Cremoso, delicado e irresistível." },
  { id: "t-prestigio-p", filter: "small", chocolate: "milk", size: "Trufa pequena · chocolate ao leite", name: "Prestígio", price: 3, image: IMAGES.trufflePrestige, description: "Coco fresco com cobertura de chocolate." },
  { id: "t-sensacao-p", filter: "small", chocolate: "white", size: "Trufa pequena · chocolate branco", name: "Sensação", price: 3, image: IMAGES.truffleSensation, description: "Recheio cremoso com toque frutado." },
  { id: "t-prestigio-white-p", filter: "small", chocolate: "white", size: "Trufa pequena · chocolate branco", name: "Prestígio", price: 3, image: IMAGES.trufflePrestigeWhite, description: "Coco cremoso em uma delicada casquinha de chocolate branco." },
  { id: "t-ovomaltine-p", filter: "small", chocolate: "milk", size: "Trufa pequena · chocolate ao leite", name: "Ovomaltine", price: 3, image: IMAGES.truffleOvomaltine, description: "Crocância e muito chocolate." },
  { id: "t-kinder-p", filter: "small", chocolate: "milk", size: "Trufa pequena · chocolate ao leite", name: "Kinder", price: 3, image: IMAGES.truffleKinder, description: "Recheio cremoso de leite." },
  { id: "t-cookies-p", filter: "small", chocolate: "milk", size: "Trufa pequena · chocolate ao leite", name: "Cookies'N Cream", price: 3, image: IMAGES.truffleCookiesMilk, description: "Creme branco e pedaços de cookie." },
  { id: "t-alpino-g", filter: "large", chocolate: "milk", size: "Trufa grande · chocolate ao leite", name: "Alpino", price: 5, image: IMAGES.truffleAlpino, description: "Mais recheio para matar a vontade." },
  { id: "t-ninho-g", filter: "large", chocolate: "milk", size: "Trufa grande · chocolate ao leite", name: "Ninho com Alpino", price: 5, image: IMAGES.truffleNinhoAlpinoLargeMilk, description: "Cremosidade em tamanho especial." },
  { id: "t-prestigio-g", filter: "large", chocolate: "milk", size: "Trufa grande · chocolate ao leite", name: "Prestígio", price: 5, image: IMAGES.trufflePrestige, description: "Coco e chocolate em equilíbrio." },
  { id: "t-sensacao-g", filter: "large", chocolate: "milk", size: "Trufa grande · chocolate ao leite", name: "Sensação", price: 5, image: IMAGES.truffleSensationLargeMilk, description: "Uma combinação marcante e cremosa." },
  { id: "c-alpino", category: "cone", size: "Cone trufado", name: "Alpino", price: 8, image: IMAGES.coneAlpino, description: "Casquinha crocante e recheio de chocolate." },
  { id: "c-ninho", category: "cone", size: "Cone trufado", name: "Ninho com Alpino", price: 8, image: IMAGES.coneNinho, description: "Creme de leite em pó com chocolate." },
  { id: "c-prestigio", category: "cone", size: "Cone trufado", name: "Prestígio", price: 8, image: IMAGES.conePrestige, description: "Recheio de coco e cobertura generosa." },
  { id: "c-ovomaltine", category: "cone", size: "Cone trufado", name: "Ovomaltine", price: 8, image: IMAGES.coneOvomaltine, description: "Textura crocante e sabor intenso." },
  { id: "c-ferrero", category: "cone", size: "Cone trufado", name: "Ferrero", price: 10, image: IMAGES.coneFerrero, description: "Chocolate, avelã e pedacinhos crocantes." },
  { id: "c-kinder", category: "cone", size: "Cone trufado", name: "Kinder", price: 10, image: IMAGES.coneKinder, description: "Creme suave de leite e muito chocolate." },
  { id: "c-cookies", category: "cone", size: "Cone trufado", name: "Cookies'N Cream", price: 10, image: IMAGES.coneCookies, description: "Creme branco e cookie em cada camada." },
];

const TRUFFLE_GROUPS = [
  { id: "small", name: "Trufas pequenas", price: 3 },
  { id: "large", name: "Trufas grandes", price: 5 },
];

const CHOCOLATE_GROUPS = [
  { id: "milk", name: "Chocolate ao leite" },
  { id: "white", name: "Chocolate branco" },
];

const EGG_PRODUCTS = [
  { id: "shell-milk", group: "shells", kind: "Casca de Páscoa", name: "Chocolate ao leite", image: IMAGES.shellMilkChocolate, description: "Casca lisa de chocolate ao leite, pronta para presentear ou rechear.", prices: [{ size: "250 g", price: 40 }, { size: "350 g", price: 50 }] },
  { id: "shell-white", group: "shells", kind: "Casca de Páscoa", name: "Chocolate branco", image: IMAGES.shellWhiteChocolate, description: "Casca lisa de chocolate branco, delicada e cremosa.", prices: [{ size: "250 g", price: 40 }, { size: "350 g", price: 50 }] },
  { id: "shell-crunchy", group: "shells", kind: "Casca de Páscoa", name: "Chocolate crocante", image: IMAGES.shellCrunchy, description: "Casca de chocolate ao leite com uma textura crocante especial.", prices: [{ size: "250 g", price: 40 }, { size: "350 g", price: 50 }] },
  { id: "egg-alpino", group: "flavors", kind: "Ovo recheado · tradicional", name: "Alpino", image: IMAGES.eggAlpino, description: "Chocolate ao leite com recheio cremoso e intenso.", prices: [{ size: "250 g", price: 50 }, { size: "350 g", price: 60 }] },
  { id: "egg-ninho-alpino", group: "flavors", kind: "Ovo recheado · tradicional", name: "Ninho com Alpino", image: IMAGES.eggNinhoAlpino, description: "Creme de leite Ninho com pedaços de chocolate ao leite.", prices: [{ size: "250 g", price: 50 }, { size: "350 g", price: 60 }] },
  { id: "egg-prestigio", group: "flavors", kind: "Ovo recheado · tradicional", name: "Prestígio", image: IMAGES.eggPrestige, description: "Coco cremoso, chocolate ao leite e um toque tostado.", prices: [{ size: "250 g", price: 50 }, { size: "350 g", price: 60 }] },
  { id: "egg-ovomaltine", group: "flavors", kind: "Ovo recheado · tradicional", name: "Ovomaltine", image: IMAGES.eggOvomaltine, description: "Chocolate cremoso com crocância em cada colherada.", prices: [{ size: "250 g", price: 50 }, { size: "350 g", price: 60 }] },
  { id: "egg-oreo", group: "flavors", kind: "Ovo recheado · especial", name: "Oreo", image: IMAGES.eggOreo, description: "Creme branco e pedaços crocantes de biscoito de cacau.", prices: [{ size: "250 g", price: 55 }, { size: "350 g", price: 65 }] },
  { id: "egg-ferrero", group: "flavors", kind: "Ovo recheado · especial", name: "Ferrero", image: IMAGES.eggFerrero, description: "Creme de avelã, chocolate e pedaços de avelã tostada.", prices: [{ size: "250 g", price: 55 }, { size: "350 g", price: 65 }] },
  { id: "egg-ninho", group: "flavors", kind: "Ovo recheado · especial", name: "Ninho", image: IMAGES.eggNinho, description: "Muito creme de leite Ninho e raspas de chocolate branco.", prices: [{ size: "250 g", price: 55 }, { size: "350 g", price: 65 }] },
];

const EGG_GROUPS = [
  { id: "shells", name: "Cascas", description: "Chocolate ao leite, chocolate branco e chocolate crocante." },
  { id: "flavors", name: "Sabores", description: "Ovos recheados tradicionais e especiais, organizados por sabor." },
];

const money = new Intl.NumberFormat(CONFIG.locale, {
  style: "currency",
  currency: CONFIG.currency,
});

const productTemplate = document.querySelector("#product-template");
const truffleGrid = document.querySelector("#truffle-grid");
const coneGrid = document.querySelector("#cone-grid");
const eggGrid = document.querySelector("#egg-grid");

function productCard(product) {
  const fragment = productTemplate.content.cloneNode(true);
  const image = fragment.querySelector("img");

  image.src = product.image;
  image.loading = "lazy";
  image.alt = `${product.size}: ${product.name}`;
  fragment.querySelector(".product-kind").textContent = product.size;
  fragment.querySelector("h3").textContent = product.name;
  fragment.querySelector(".product-description").textContent = product.description;
  fragment.querySelector(".price").textContent = money.format(product.price);

  return fragment;
}

function renderTruffles(filter = "all") {
  truffleGrid.replaceChildren();

  TRUFFLE_GROUPS.filter((group) => filter === "all" || group.id === filter).forEach((group) => {
    const section = document.createElement("section");
    section.className = "truffle-size-group";
    section.setAttribute("aria-labelledby", `truffle-size-${group.id}`);

    const header = document.createElement("header");
    header.className = "truffle-size-group__header";
    const title = document.createElement("h3");
    title.id = `truffle-size-${group.id}`;
    title.textContent = group.name;
    const price = document.createElement("strong");
    price.textContent = money.format(group.price);
    header.append(title, price);
    section.append(header);

    CHOCOLATE_GROUPS.forEach((chocolate) => {
      const products = PRODUCTS.filter((product) => product.id.startsWith("t-") && product.filter === group.id && product.chocolate === chocolate.id);
      if (!products.length) return;

      const flavorGroup = document.createElement("section");
      flavorGroup.className = "truffle-flavor-group";
      const flavorTitle = document.createElement("h4");
      flavorTitle.textContent = chocolate.name;
      const cards = document.createElement("div");
      cards.className = "product-grid";
      products.forEach((product) => cards.append(productCard(product)));
      flavorGroup.append(flavorTitle, cards);
      section.append(flavorGroup);
    });

    truffleGrid.append(section);
  });
}

function renderCones() {
  coneGrid.replaceChildren();
  PRODUCTS.filter((product) => product.category === "cone")
    .forEach((product) => coneGrid.append(productCard(product)));
}

function renderEggs() {
  eggGrid.replaceChildren();

  EGG_GROUPS.forEach((group) => {
    const section = document.createElement("section");
    section.className = "egg-group";
    section.setAttribute("aria-labelledby", `egg-group-${group.id}`);

    const header = document.createElement("header");
    header.className = "egg-group__header";
    const title = document.createElement("h3");
    title.id = `egg-group-${group.id}`;
    title.textContent = group.name;
    const summary = document.createElement("p");
    summary.textContent = group.description;
    header.append(title, summary);

    const products = document.createElement("div");
    products.className = "egg-group__products";

    EGG_PRODUCTS.filter((egg) => egg.group === group.id).forEach((egg) => {
    const card = document.createElement("article");
    card.className = "egg-card";

    const image = document.createElement("img");
    image.className = "egg-image";
    image.src = egg.image;
    image.loading = "lazy";
    image.alt = `${egg.kind}: ${egg.name}`;

    const details = document.createElement("div");
    details.className = "egg-details";
    const kind = document.createElement("p");
    kind.className = "product-kind";
    kind.textContent = egg.kind;
    const title = document.createElement("h3");
    title.textContent = egg.name;
    const description = document.createElement("p");
    description.className = "egg-description";
    description.textContent = egg.description;
    const prices = document.createElement("div");
    prices.className = "egg-prices";
    egg.prices.forEach((option) => {
      const line = document.createElement("div");
      const size = document.createElement("span");
      const value = document.createElement("strong");
      size.textContent = option.size;
      value.textContent = money.format(option.price);
      line.append(size, value);
      prices.append(line);
    });
    details.append(kind, title, description, prices);
      card.append(image, details);
      products.append(card);
    });

    section.append(header, products);
    eggGrid.append(section);
  });
}

function configureBrand() {
  document.querySelectorAll(".brand-name").forEach((node) => {
    node.textContent = CONFIG.brandName;
  });
  document.title = `${CONFIG.brandName} | Cardápio artesanal`;
  document.querySelector('meta[name="description"]').content =
    `Cardápio visual da ${CONFIG.brandName}: trufas, cones recheados e ovos de Páscoa artesanais.`;
  document.querySelector("#year").textContent = new Date().getFullYear();
}

function configureEasterVisibility() {
  if (CONFIG.showEasterProducts) return;
  document.querySelectorAll(".eggs-section, .easter-link").forEach((element) => {
    element.hidden = true;
  });
}

function setupFilters() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      renderTruffles(filter);
    });
  });
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#menu");
  if (!toggle || !navigation) return;

  const closeMenu = () => {
    navigation.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
}

configureBrand();
configureEasterVisibility();
renderTruffles();
renderCones();
renderEggs();
setupFilters();
setupMobileMenu();
