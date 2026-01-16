const FILTER_KEYS = {
  type: "filter.p.product_type",
  tag: "filter.p.m.custom.filter_tags",
};

let PRODUCTS = [];

function getUrlFilters() {
  const params = new URLSearchParams(window.location.search);

  return {
    
    types: params.getAll(FILTER_KEYS.type).map((x) => decodeURIComponent(x)),
    tags: params.getAll(FILTER_KEYS.tag).map((x) => decodeURIComponent(x)),
  };
}

function setUrlFilters({ types, tags }) {
  const params = new URLSearchParams();

  types.forEach((t) => params.append(FILTER_KEYS.type, t));
  tags.forEach((t) => params.append(FILTER_KEYS.tag, t));

  const newUrl =
    window.location.pathname + (params.toString() ? `?${params.toString()}` : "");

  history.replaceState({}, "", newUrl);
}

function toggleFilter(filterType, value) {
  const current = getUrlFilters();

  let list = filterType === "type" ? current.types : current.tags;

  if (list.includes(value)) {
    list = list.filter((v) => v !== value);
  } else {
    list = [...list, value];
  }

  const next = {
    types: filterType === "type" ? list : current.types,
    tags: filterType === "tag" ? list : current.tags,
  };

  setUrlFilters(next);
  renderProducts();
}

function productMatchesFilters(product, filters) {
  
  const typeMatch =
    filters.types.length === 0 || filters.types.includes(product.type);

  
  const tagMatch =
    filters.tags.length === 0 ||
    filters.tags.some((tag) => product.tags.includes(tag));

  return typeMatch && tagMatch;
}
  function toTitleCase(str) {
  if (!str) {
    return "";
  }
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}
function renderProducts() {
  const filters = getUrlFilters();
  const results = PRODUCTS.filter((p) => productMatchesFilters(p, filters));

  const grid = document.querySelector("#productsGrid");
  if (!grid) return;

  grid.innerHTML = results
    .map((p) => {
      const primary = p.colors?.primary || "#ec008c";
      const secondary = p.colors?.secondary || "#fff200";
      const isVarietyPack = p.type?.toLowerCase().includes("variety pack");

      return `
      <article class="poppi-card themed ${isVarietyPack ? " is-variety-pack" : ""}"
        style="--color-primary:${primary}; --color-secondary:${secondary}; margin: auto;"
      >
        <div class="poppi-card__inner">

          <div class="poppi-card__image-wrapper">
            <div class="poppi-card__top">
              <div class="poppi-card__circle">
                <div class="poppi-card__half-mask">
                  <a class="poppi-card__link" href="${p.url || "#"}">
                    <img class="poppi-card__img"
                      src="./images/${p.image}"
                      alt="${toTitleCase(p.title)}"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="poppi-card__title-wrap">
            <h4 class="poppi-card__title">${toTitleCase(p.title)}</h4>
          </div>

          <button class="poppi-card__btn">
            buy now
            <span class="chev">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708">
                </path>
              </svg>
            </span>
          </button>

        </div>
      </article>
    `;
    })
    .join("");


  updateFilterUIState();
}

function updateFilterUIState() {
  const filters = getUrlFilters();

  document.querySelectorAll("[data-filter-type]").forEach((btn) => {
    const kind = btn.dataset.filterType; 
    const value = btn.dataset.value;

    const active =
      kind === "type"
        ? filters.types.includes(value)
        : filters.tags.includes(value);

    btn.classList.toggle("active", active);
  });
}

function initFilters() {
  document.querySelectorAll("[data-filter-type]").forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleFilter(btn.dataset.filterType, btn.dataset.value);
    });
  });
}

async function loadProducts() {
  const res = await fetch("./data/products.json");
  const json = await res.json();
  PRODUCTS = json.products || json;
}

(async function init() {
  await loadProducts();
  initFilters();
  renderProducts();
})();

let lastScrollY = window.scrollY;
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  
  if (currentScrollY < 20) {
    header.classList.remove("nav-hidden");
    lastScrollY = currentScrollY;
    return;
  }

  
  if (currentScrollY > lastScrollY) {
    header.classList.add("nav-hidden");
  }

  
  if (currentScrollY < lastScrollY) {
    header.classList.remove("nav-hidden");
  }

  lastScrollY = currentScrollY;
});
