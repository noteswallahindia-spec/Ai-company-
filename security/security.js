const requestInput = document.getElementById("request");
const scanBtn = document.getElementById("scanBtn");

const result = document.getElementById("result");

const statusBox = document.getElementById("statusBox");
const securityChecks = document.getElementById("securityChecks");
const qaChecks = document.getElementById("qaChecks");
const issues = document.getElementById("issues");
const actions = document.getElementById("actions");

scanBtn.addEventListener("click", runScan);

function runScan() {

  const request = requestInput.value.trim();

  if (!request) {
    alert("Project data paste karo.");
    return;
  }

  const text = request.toLowerCase();

  const security = [
    "Authentication check",
    "Authorization / role check",
    "Input validation check",
    "Secret/API-key exposure check",
    "Database permission check",
    "Storage permission check"
  ];

  const qa = [
    "Required pages check",
    "Missing functionality check",
    "Error-state check",
    "Mobile UI check",
    "Backend dependency check"
  ];

  let detectedIssues = [];
  let requiredActions = [];

  /*
    Basic local pre-scan.
    Real AI security analysis will be connected
    through the secure backend later.
  */

  if (
    text.includes("api key") ||
    text.includes("apikey") ||
    text.includes("secret key") ||
    text.includes("password")
  ) {
    detectedIssues.push(
      "Possible secret/API credential exposure detected."
    );

    requiredActions.push(
      "Move secrets to secure server-side environment variables."
    );
  }

  if (
    text.includes("delete all") ||
    text.includes("drop database") ||
    text.includes("delete database")
  ) {
    detectedIssues.push(
      "Potentially destructive database operation detected."
    );

    requiredActions.push(
      "STOP task and require owner approval before execution."
    );
  }

  if (
    text.includes("admin") &&
    !text.includes("permission") &&
    !text.includes("role")
  ) {
    detectedIssues.push(
      "Admin functionality mentioned without clear permission rules."
    );

    requiredActions.push(
      "Define admin role and server-side authorization."
    );
  }

  if (detectedIssues.length === 0) {

    statusBox.innerHTML = `
      <div class="item safe">
        <strong>SAFE TO REVIEW</strong>
        <span>No obvious high-risk pattern found in this basic scan.</span>
      </div>
    `;

  } else {

    statusBox.innerHTML = `
      <div class="item danger">
        <strong>TASK BLOCKED FOR REVIEW</strong>
        <span>Potential risk detected. Do not execute automatically.</span>
      </div>
    `;
  }

  renderList(securityChecks, security);
  renderList(qaChecks, qa);

  if (detectedIssues.length) {
    renderList(issues, detectedIssues);
    renderList(actions, requiredActions);
  } else {

    issues.innerHTML = `
      <div class="item safe">
        <strong>No obvious issues</strong>
      </div>
    `;

    actions.innerHTML = `
      <div class="item">
        <strong>Continue to QA / approval</strong>
      </div>
    `;
  }

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
