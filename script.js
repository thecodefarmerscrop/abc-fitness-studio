document.getElementById('subscribeForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thanks for subscribing!");
});

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  localStorage.setItem("contact", JSON.stringify({ name }));
  alert(`Thank you, ${name}, for your message!`);
});

function addToSchedule(className) {
  let schedule = JSON.parse(sessionStorage.getItem("schedule") || "[]");
  schedule.push(className);
  sessionStorage.setItem("schedule", JSON.stringify(schedule));
  alert(`${className} added to your schedule!`);
}

function viewSchedule() {
  const modal = document.getElementById("scheduleModal");
  const list = document.getElementById("scheduleList");
  list.innerHTML = "";
  let schedule = JSON.parse(sessionStorage.getItem("schedule") || "[]");
  schedule.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("scheduleModal").classList.add("hidden");
}

function clearSchedule() {
  sessionStorage.removeItem("schedule");
  document.getElementById("scheduleList").innerHTML = "";
  alert("Schedule cleared!");
}
