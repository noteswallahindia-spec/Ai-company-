const requestInput = document.getElementById("request");
const findBtn = document.getElementById("findBtn");
const result = document.getElementById("result");
const productsBox = document.getElementById("products");

findBtn.addEventListener("click", findProducts);

function findProducts() {

  const request = requestInput.value.trim();

  if (!request) {
    alert("Product requirement likho.");
    return;
  }

  const products = [
    {
      name: "Portable Study Lamp",
      category: "Study",
      reason: "Students ke liye useful product."
    },
    {
      name: "Desk Organizer",
      category: "Education",
      reason: "Study table organization ke liye useful."
    },
    {
      name: "Phone Stand",
      category: "Accessories",
      reason: "Online classes aur desk use ke liye useful."
    },
    {
      name: "USB Rechargeable Light",
      category: "Electronics",
      reason: "Portable lighting ke liye useful."
    }
  ];

  productsBox.innerHTML = "";

  products.forEach((product, index) => {

    const div = document.createElement("div");

    div.className = "product";

    div.innerHTML = `
      <h3>${escapeHTML(product.name)}</h3>

      <p>
        Category: ${escapeHTML(product.category)}
      </p>

      <p>
        ${escapeHTML(product.reason)}
      </p>

      <div class="approval">
        <button
          class="approve"
          onclick="approveProduct(${index})">
          Approve
        </button>

        <button
          class="reject"
          onclick="rejectProduct(${index})">
          Reject
        </button>
      </div>
    `;

    productsBox.appendChild(div);
  });

  result.classList.remove("hidden");
}

function approveProduct(index) {

  const cards = document.querySelectorAll(".product");

  if (cards[index]) {

    cards[index].innerHTML += `
      <p><strong>✓ Approved</strong> — Listing task created.</p>
    `;
  }
}

function rejectProduct(index) {

  const cards = document.querySelectorAll(".product");

  if (cards[index]) {

    cards[index].innerHTML += `
      <p><strong>Rejected</strong> — Product removed from approval.</p>
    `;
  }
}

function escapeHTML(value) {

  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
