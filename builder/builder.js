const requestInput = document.getElementById("request");
const buildBtn = document.getElementById("buildBtn");

const result = document.getElementById("result");
const projectInfo = document.getElementById("projectInfo");
const pagesBox = document.getElementById("pages");
const componentsBox = document.getElementById("components");
const tasksBox = document.getElementById("tasks");

buildBtn.addEventListener("click", createBuildPlan);

function createBuildPlan() {

  const request = requestInput.value.trim();

  if (!request) {
    alert("Pehle batao kya build karna hai.");
    return;
  }

  const text = request.toLowerCase();

  let projectType = "Web Application";

  if (
    text.includes("shopping") ||
    text.includes("ecommerce") ||
    text.includes("flipkart") ||
    text.includes("amazon")
  ) {
    projectType = "E-Commerce Application";
  }

  let pages = [
    "Home",
    "Login",
    "Profile",
    "Settings"
  ];

  let components = [
    "Responsive Navigation",
    "Buttons",
    "Cards",
    "Forms",
    "Loading States",
    "Error States"
  ];

  let tasks = [
    "Create responsive application layout",
    "Create navigation system",
    "Create reusable UI components",
    "Create mobile responsive design",
    "Add loading and error states",
    "Prepare frontend for backend integration"
  ];

  if (
    text.includes("shopping") ||
    text.includes("ecommerce") ||
    text.includes("flipkart") ||
    text.includes("amazon")
  ) {

    pages = [
      "Home",
      "Products",
      "Product Details",
      "Search",
      "Cart",
      "Checkout",
      "Profile",
      "Login",
      "Admin Panel"
    ];

    components = [
      "Product Card",
      "Search Bar",
      "Category Navigation",
      "Product Gallery",
      "Cart Item",
      "Checkout Form",
      "Bottom Navigation",
      "Admin Product Manager"
    ];

    tasks = [
      "Create mobile-first shopping layout",
      "Create product listing interface",
      "Create product details page",
      "Create search and category system",
      "Create cart interface",
      "Create checkout interface",
      "Create user profile interface",
      "Create admin panel UI",
      "Prepare frontend for backend API",
      "Prepare frontend for authentication"
    ];
  }

  projectInfo.innerHTML = `
    <div class="item">
      <strong>Project Type</strong>
      <span>${escapeHTML(projectType)}</span>
    </div>

    <div class="item">
      <strong>Original Request</strong>
      <span>${escapeHTML(request)}</span>
    </div>
  `;

  renderList(pagesBox, pages);
  renderList(componentsBox, components);
  renderTasks(tasksBox, tasks);

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

function renderTasks(container, tasks) {

  container.innerHTML = "";

  tasks.forEach((task, index) => {

    const div = document.createElement("div");

    div.className = "item task";

    div.innerHTML = `
      <span class="task-number">${index + 1}</span>
      <span>${escapeHTML(task)}</span>
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
