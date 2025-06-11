// Update this to your actual PHP endpoint
const PHP_API_URL = "https://akcoder.unaux.com/check.php";

// Add your Google Family invite links here
const inviteLinks = [
  { url: "https://families.google.com/join/promo/27UX2JTv1uB7wssZ819mMyDO6KFf7w" }, // Example invalid
  { url: "https://families.google.com/join/promo/nJmzEHI9VNTQEXMb8HNfTUOCdDQ0Rw" },
  { url: "https://families.google.com/join/promo/iuvpBVI01XX81PpUMKhBDajvbgP4gg" },
  { url: "https://families.google.com/join/promo/hlMvEzds4Trqln7W3IMJJLIlVpKL-w" } // Example valid
  // Add more links as needed
];

const linkList = document.getElementById("link-list");
let validLinks = [];
let checkedCount = 0;

function renderLinks() {
  linkList.innerHTML = "";
  if (validLinks.length === 0) {
    const msg = document.createElement("p");
    msg.innerText = "❌ All invite links have been used or are invalid.";
    msg.className = "error";
    linkList.appendChild(msg);
    return;
  }
  validLinks.forEach((link, idx) => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>User ${idx + 1}</strong> - <a href="${link.url}" target="_blank">${link.url}</a>`;
    const btn = document.createElement("button");
    btn.innerText = "Join";
    btn.className = "join-btn";
    btn.onclick = () => window.open(link.url, "_blank");
    div.appendChild(btn);
    linkList.appendChild(div);
  });
}

// Fetch validity for each invite link from your PHP backend
inviteLinks.forEach(link => {
  fetch(`${PHP_API_URL}?link=${encodeURIComponent(link.url)}`)
    .then(res => res.json())
    .then(data => {
      checkedCount++;
      if (data.valid) validLinks.push(link);
      if (checkedCount === inviteLinks.length) renderLinks();
    })
    .catch(() => {
      checkedCount++;
      if (checkedCount === inviteLinks.length) renderLinks();
    });
});
