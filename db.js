function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUser(user) {
  let users = getUsers();

  let existing = users.find(u => u.name === user.name);

  if (existing) {
    existing.money = user.money;
  } else {
    users.push(user);
  }

  localStorage.setItem("users", JSON.stringify(users));
}

function updateLeaderboard() {
  let users = getUsers();
  users.sort((a, b) => b.money - a.money);

  let list = document.getElementById("leaderboard");
  list.innerHTML = "";

  users.slice(0, 5).forEach(u => {
    let li = document.createElement("li");
    li.innerText = `${u.name} - ₹${u.money}`;
    list.appendChild(li);
  });
}