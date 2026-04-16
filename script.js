let money = 0;
let currentUser = null;

// LOGIN
function login() {
  let name = document.getElementById("username").value;
  if (!name) return alert("Enter name");

  currentUser = name;

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("app").style.display = "block";

  document.getElementById("userDisplay").innerText = "👤 " + name;

  startEarning();
}

// EARNING
function startEarning() {
  setInterval(() => {
    let inc = Math.floor(Math.random() * 500);
    money += inc;

    document.getElementById("money").innerText =
      "₹" + money.toLocaleString();

    saveUser({ name: currentUser, money: money });
    updateLeaderboard();

  }, 1500);
}

// TELEGRAM SHARE
function shareTelegram() {
  let text = `😱 I earned ₹${money} today!\nTry this app`;
  let url = `https://t.me/share/url?text=${encodeURIComponent(text)}`;
  window.open(url);
}

// SCREENSHOT
function downloadScreenshot() {
  html2canvas(document.body).then(canvas => {
    let link = document.createElement("a");
    link.download = "earn.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}

// PREMIUM
function buyPremium() {
  alert("🎉 Premium Activated!");
  document.body.style.background = "#111827";
}

// REEL IMAGE
function generateReel() {
  const canvas = document.getElementById("reelCanvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, 0, 400, 700);

  ctx.fillStyle = "white";
  ctx.font = "bold 28px Arial";
  ctx.fillText("💸 TODAY EARNING", 40, 100);

  ctx.fillStyle = "#22c55e";
  ctx.font = "bold 42px Arial";
  ctx.fillText("₹" + money, 110, 200);

  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("😱 Itna kaise kamaya?", 70, 320);
  ctx.fillText("Link in bio 🔥", 100, 360);

  ctx.fillStyle = "#888";
  ctx.font = "14px Arial";
  ctx.fillText(" Only", 130, 650);

  let link = document.createElement("a");
  link.download = "reel.png";
  link.href = canvas.toDataURL();
  link.click();
}