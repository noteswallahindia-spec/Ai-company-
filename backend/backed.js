const requestInput = document.getElementById("request");
const generateBtn = document.getElementById("generateBtn");

const result = document.getElementById("result");

const architecture = document.getElementById("architecture");
const tables = document.getElementById("tables");
const auth = document.getElementById("auth");
const storage = document.getElementById("storage");
const apis = document.getElementById("apis");
const security = document.getElementById("security");

generateBtn.addEventListener("click", generateBackendPlan);

function generateBackendPlan() {

  const request = requestInput.value.trim();

  if (!request) {
    alert("Backend requirement likho.");
    return;
  }

  const text = request.toLowerCase();

  let tableList = [
    "users",
    "profiles"
  ];

  let apiList = [
    "Create user",
    "Get user",
    "Update user"
  ];

  let storageList = [
    "Private files bucket",
    "Public assets bucket"
  ];

  let securityList = [
    "Validate user input",
    "Protect authenticated routes",
    "Apply role-based permissions",
    "Never expose secret API keys",
    "Validate database operations"
  ];

  let authText = "Authentication system required.";

  if (
    text.includes("shopping") ||
    text.includes("ecommerce") ||
    text.includes("flipkart") ||
    text.includes("amazon") ||
    text.includes("product")
  ) {

    tableList = [
      "users",
      "profiles",
      "admins",
      "products",
      "categories",
      "cart_items",
      "orders",
      "order_items"
    ];

    apiList = [
      "Create product",
      "Get products",
      "Get product details",
      "Update product",
      "Delete product",
      "Create cart item",
      "Update cart",
      "Create order",
      "Get user orders"
    ];

    storageList = [
      "Product images",
      "User uploads",
      "Admin assets"
    ];

    authText =
      "User authentication + admin role system.";

    securityList = [
      "Only authenticated users access private data",
      "Only admins can create products",
      "Only admins can update products",
      "Only admins can delete products",
      "Users can access only their own orders",
      "Validate every API request",
      "Protect secrets on server-side",
      "Apply database row-level security"
    ];
  }

  architecture.innerHTML = `
    <div class="item">
      <strong>Backend Stack</strong>
      <span>Supabase + PostgreSQL + Auth + Storage + API layer</span>
    </div>
  `;

  renderList(tables, tableList);
  renderList(apis, apiList);
  renderList(storage, storageList);

  auth.innerHTML = `
    <div class="item">
      <strong>Authentication</strong>
      <span>${escapeHTML(authText)}</span>
    </div>
  `;

  renderList(security, securityList);

  result.classList.remove("hidden");
}

function renderList(container, items) {

  container.innerHTML = "";

  items.forEach(item => {

    const div = document.createElement("div");

    div.className = "item";

    div.innerHTML = `
      <strong>${escapeHTML(item)}</strong>
    `;

    container.appendChild(div);
  });
}

function escapeHTML(value) {

  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
