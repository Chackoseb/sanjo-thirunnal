// Confetti animation (lightweight, no external libs)
let confettiAnimationId = null;
let confettiResizeHandler = null;
let confettiActive = false;

function startConfetti() {
  if (confettiActive) return;
  confettiActive = true;
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  let W = window.innerWidth,
    H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  const confettiColors = ["#ffb703", "#ff0054", "#00b4d8"];
  const confettiCount = 40;
  const confetti = Array.from({ length: confettiCount }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 4 + 2,
    d: Math.random() * confettiCount,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    tilt: Math.random() * 10 - 10,
    tiltAngle: 0,
    tiltAngleIncrement: Math.random() * 0.1,
  }));
  function draw() {
    ctx.clearRect(0, 0, W, H);
    confetti.forEach((c) => {
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 3, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 5);
      ctx.stroke();
    });
    update();
  }
  function update() {
    confetti.forEach((c, i) => {
      c.y += Math.cos(c.d) + 1 + c.r / 2;
      c.x += Math.sin(0.01 * c.d);
      if (c.y > H) {
        confetti[i] = {
          x: Math.random() * W,
          y: -10,
          r: c.r,
          d: c.d,
          color: c.color,
          tilt: Math.random() * 10 - 10,
        };
      }
    });
  }
  function animate() {
    if (!confettiActive) return;
    draw();
    confettiAnimationId = requestAnimationFrame(animate);
  }
  animate();
  confettiResizeHandler = () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  };
  window.addEventListener("resize", confettiResizeHandler);
}

function stopConfetti() {
  confettiActive = false;
  if (confettiAnimationId) {
    cancelAnimationFrame(confettiAnimationId);
    confettiAnimationId = null;
  }
  const canvas = document.getElementById("confetti-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  if (confettiResizeHandler) {
    window.removeEventListener("resize", confettiResizeHandler);
    confettiResizeHandler = null;
  }
}

// Editorial text (can be loaded from a file or API)
const editorialText = `
"മനുഷ്യർ നിങ്ങളുടെ സത്പ്രവർത്തികൾ കണ്ട് സ്വർഗ്ഗസ്ഥനായ നിങ്ങളുടെ പിതാവിനെ മഹത്വപ്പെടുത്തേണ്ടതിന് നിങ്ങളുടെ വെളിച്ചം അവരുടെ മുമ്പിൽ പ്രകാശിക്കട്ടെ.” (മത്താ. 5:16)

2025 ൽ കാലം ചെയ്‌ത ഫ്രാൻസിസ് മാർപാപ്പ പ്രത്യാശയുടെ തീർത്ഥാടകർ എന്ന ആപ്‌തവാക്യത്തോടെ,
മഹാജൂബിലിയായി പ്രഖ്യാപിച്ചിരിക്കുന്ന ഈ സാഹചര്യത്തിൽ നാളത്തെ വാഗ്‌ദാനങ്ങളായ 173 യുവജനങ്ങൾ ഒരു
മനസ്സോടെ ഒന്നു ചേർന്ന്, സാൻജോനഗർ ഇടവകയുടെ സ്വർഗ്ഗീയമദ്ധ്യസ്ഥനായ വി. യൗസേപ്പിതാവിന്റെയും, പരിശുദ്ധ
കന്യകാമറിയത്തിന്റെയും, വി. സെബസ്ത്യാനോസിന്റെയും, വി. ഗീവർഗ്ഗീസിന്റെയും സംയുക്ത തിരുനാൾ മെയ് 2, 3, 4 തിയ്യതികളിൽ ആഘോഷിക്കുകയാണല്ലോ.
ജീവിതത്തിന്റെ തിരക്കുകൾക്കിടയിലും ഇടവകയോടുള്ള സ്നേഹത്തിന്റെയും, ആത്മാർത്ഥതയുടെയും പ്രതീകമായി തീരുന്നതാണ് യുവജനങ്ങൾ ഏറ്റെടുത്ത് നടത്തുന്ന നമ്മുടെ തിരുനാൾ.
അപ്പം ഒന്നായിരിക്കുന്നതുപോലെ നമ്മൾ എല്ലാവരും ഒന്നായിരിക്കണമെന്ന് ആഗ്രഹിക്കുന്ന ഈശോയുടെ സ്നേഹത്തിന്റെ തിരുമുമ്പിൽ നമ്മുടെ യുവജനങ്ങൾ ഏറ്റെടുത്ത് നടത്തുന്ന തിരുനാളിനെ സമർപ്പിക്കാം. നമ്മുടെ
ഇടവകയിലെ ഓരോ കുടുംബത്തിന്റെയും, സ്നേഹത്തിന്റെയും, വിശ്വാസത്തിന്റെയും പ്രകടനമാണ് നമ്മുടെ തിരുനാൾ. ആയതിനാൽ നമ്മുടെ യുവജനങ്ങളെ പ്രോത്സാഹിപ്പിക്കാം, നാളെയുടെ വാഗ്‌ദാനങ്ങളായി അവർ വളരട്ടെ.
അതിനായി നമുക്ക് ഒന്നുചേർന്ന് കൈകോർക്കാം. ദൈവം എല്ലാവരെയും സമൃദ്ധമായി അനുഗ്രഹിക്കട്ടെ....\n\n- സ്നേഹപൂർവ്വം ജോഷിയച്ചൻ
`;

document.addEventListener("DOMContentLoaded", () => {
  // Set editorial text
  document.getElementById("editorial-text").innerText = editorialText;
  // Confetti toggle button logic
  const confettiBtn = document.getElementById("confetti-toggle");
  const confettiBtnText = document.getElementById("confetti-toggle-text");
  const confettiBtnIcon = document.getElementById("confetti-toggle-icon");
  confettiBtn.addEventListener("click", () => {
    if (confettiActive) {
      stopConfetti();
      confettiBtnText.textContent = "";
      confettiBtnIcon.textContent = "🎉";
      confettiBtn.setAttribute("aria-pressed", "false");
    } else {
      startConfetti();
      confettiBtnText.textContent = "";
      confettiBtnIcon.textContent = "🛑";
      confettiBtn.setAttribute("aria-pressed", "true");
    }
  });
  // Render hosts
  renderHosts();
});

// List of host names
const hostNames = [
  "Vembilan Jose Serena",
  "Vembilan Simson Anjaly",
  "Iyyanan Jimmy Jenitta",
  "Koonamaavu Shaju Diya",
  "Vembilan Rappai Donwin",
  "Vembilan Rappai Albin",
  "Vembilan Joby Nivya",
  "Pullely Davis Jeswin",
  "Pullely Jeswin Anchal",
  "Pullely Babu Libin",
  "Pullely Babu Bilvin",
  "Pullely Libin Lima",
  "Cleena",
  "Kannampuza Shinto Ayana",
  "Kannampuza Antu Angel Mariya",
  "Padayatty Prasadh Milan",
  "Punnoorkodan Sony Aishwarya",
  "Kannaampuzha Shaju Eva",
  "Kizhakkekaipettiyil Tomy Joyal",
  "Kizhakkekaipettiyil Tomy Joan",
  "Vadakkumpadan Davis Joseph",
  "Vembilan Joy Alan",
  "Vembilan Joy Navya",
  "Karedan Sebastian Joe",
  "Attokaran Joseph Sona",
  "Attokaran Joseph Sneha",
  "Iyyanan Jane Sislu",
  "Plavara Wilson Angaleena",
  "Padayatty Praveen Santhwana",
  "Edattukaran Varghese Robert",
  "Edattularan Robert Nirmala",
  "Pullokaran Thomas Mariya",
  "Puthukkara Francis Anto",
  "Vembilan Baiju Adharsh",
  "Vembilan Poulose Mariya",
  "Mulangadan Jacob Aneesh",
  "Manjaprakkaaran Antony Athira",
  "Manjaprakkaaran Tomy Riya",
  "Pynadathu Nijith Riya",
  "Manjaprakkaran Jimmy Britto",
  "Manjaprakkaran Jimmy Benitta",
  "Pullely Sebastian Albin",
  "Karedan Tijo Anagha Grace",
  "Karedan Tijo Anitta",
  "Thaliyan Thomas Eby",
  "Thaliyan Thomas Emilin",
  "Vithayathil Antu Ashish",
  "Vithayathil Antu Ansha",
  "Karedan Varghese Joseph",
  "Pullely Johny Josiya",
  "Pullely Johny Rosmin",
  "Ambooken Johnson Silna",
  "Pullely Daniel Anitta",
  "Pullely Thomson Princy",
  "Pullely Johny Geordin",
  "Mandy Joby Jeril",
  "Mandy Joby Aleena",
  "Mandy Babu Joel",
  "Karedan Thomas Jibin",
  "Karedan Thomas Jithin",
  "Karedan Jithin Anu",
  "Karedan Tomy Eby",
  "Karedan Eby Sheethal",
  "Pullely Joy Dona",
  "Konamavu Thomas Thushara",
  "Konamavu Thomas Theres",
  "Mandy Joshy Annmariya",
  "Mandy Joshy Albin",
  "Konnammavu David Anitta",
  "Karedan Davis Anna rose",
  "Ambookkan Shaiju Jerome",
  "Ambookkan Shaiju Juliat",
  "Pottakkal Shaju Ashik",
  "Pottakkal Shaju Agna",
  "Parokkaran Joban Joyal",
  "Pottakkal Raju Aneena",
  "Pottakkal Raju Anagha",
  "Machamplilly Saju John Paul",
  "Machamplilly Saju Liya Rose",
  "Chaamakkala Sabu Siona",
  "Pottakkal Sabu Anoop",
  "Pottakkal Anoop Raina",
  "Vadekkepedika Ebin Anju",
  "Vadekkepedika Vincent Ebin",
  "Chively Mathew Berlin",
  "Chively Berlin Sandra",
  "Pullely Gino Issac",
  "Arotha Antony Ronin",
  "Maliakkal Raphel Melbin",
  "Maliakkal Joy Jithin",
  "Kozhikkadan Pauly Pomly",
  "Kozhikkadan Pauly Dilu",
  "Nereveettil Sunny Akhil",
  "Vithayathil Denny Irin",
  "Maanadan Joseph Lidin",
  "Vembilan Shaju Aneetta",
  "Vithayathil Devassy Sinto",
  "Mandi Joby Manual",
  "Vithayathil Sebastian Chackochan",
  "Vithayathil Sebastian Ouseppachan",
  "Vithayathil Sebastian Manjusha",
  "Vithayathil Denny Diliya",
  "Vithayathil Denny Delma",
  "Koonnamavu Serin Angel Mariya",
  "Mandy Babu Tomson",
  "Mandy Babu Seban",
  "Mandy Seby Alan",
  "Thaliyan Antony Sibin",
  "Ambookkan Binoy Alwin",
  "Thekkan Kuriakose Mejo",
  "Pullely Davis Dany",
  "Pottackal Davis Dhiya",
  "Pullely Oseph Sijo",
  "Maliakkal Varghese Melwin",
  "Maliakkal Varghese Mable",
  "Ambookkan Joy Jeeson",
  "Pullely Seby Roshan",
  "Pullely Seby Rosmol",
  "Vithayathil Jose Jomon",
  "Vithayathil Jomon Liby",
  "Chettaka Anthony Aneena",
  "Ambookkan Thomas Manju",
  "Chively Davis Fredy",
  "Chively Fredy Liniya",
  "Chively Davis Flemin",
  "Chively Flemin Dew Mariya",
  "Puthushery David Akhil",
  "Moolan Joby Albin",
  "Moolan Joby Anoopa",
  "Kannampuza Lazar Abhilash",
  "Attokaran Jomon Santhwana Maria",
  "Attokaran Davis Delna",
  "Mandy Jimmy Messy",
  "Kalapurakkal Binu Antony",
  "Kalapurakkal Binu Akash",
  "Iyyanan Biju Anna",
  "Iyyanan Biju Anat Mariya",
  "Chalakkal Francis Felwin",
  "Chalakkal Francis Feljo",
  "Edattukaran Babu Alwin",
  "Edattukaran Babu Anchal Mariya",
  "Arotha Shajan Ebin",
  "Machampilly Jose Delvin",
  "Machampilly Jose Derin",
  "Machampilly Derin Renjitha",
  "Machampilly Thomas Habin",
  "Machampilly Thomas Alna",
  "Vettekkattukariyil Saji Sameo",
  "Kalapurakkal Joy David",
  "Kannampuzha Varghese Ajin",
  "Manjaprakkaran Poulose Zenitta",
  "Pulikkal Babu April",
  "Cherumadathil Pratheep Arya",
  "Purathore Jose Jismon",
  "Vithayathil Jose Joyel",
  "Vithayathil Jose Jewel",
  "Chirakkaparambil Sebastian Joseph",
  "Kalapurakkal Paul Libin",
  "Kalapurakkal Paul Liya",
  "Kannampuza Mathachan Ebin",
  "Kannampuza Ebin Liya",
  "Maanadan Davis Neema",
  "Kalapurakkal Shibu Anmariya",
  "Kalapurakkal Shibu Anisha",
  "Kalapurakkal Biju Donna",
  "Chowarakaran Thomas John",
  "Chowarakaran Thomas Jestin",
  "Vembilan Davis Dinshamaria",
  "Pallipadan Lithin Foustina",
  "Vithayathil Poulose Prince",
  "Vithayathil Poulose Priya",
  "Kannampuzha Thomas Don",
  "Neduparamban Benny Bibin",
];

// Generate hosts array with placeholder images
const hosts = hostNames.map((name, idx) => ({
  id: idx + 1,
  name,
  family: "",
  image: `images/${idx + 1}.webp`,
  details: "",
}));

// Function to create a host card
function createHostCard(host) {
  return `
        <div class="host-card">
            <div class="w-full aspect-square bg-gradient-to-br from-yellow-100 to-pink-100 flex items-center justify-center">
                <img src="${host.image}" 
                     alt="${host.name}" 
                     class="w-full h-full object-cover"
                     loading="lazy"
                     onerror="this.onerror=null; this.src='images/default.webp'">
            </div>
            <div class="p-4">
                <h3 class="host-name font-semibold text-gray-800">${host.name}</h3>
            </div>
        </div>
    `;
}

// Function to render all host cards
function renderHosts() {
  const container = document.getElementById("hosts-container");
  container.innerHTML = hosts.map((host) => createHostCard(host)).join("");
}

// Simple carousel logic for program section
(function() {
  const images = Array.from(document.querySelectorAll('#carousel-track .carousel-img'));
  if (!images.length) return;
  let current = 0;
  let timer = null;
  function updateCarousel() {
    images.forEach((img, idx) => {
      img.style.display = idx === current ? 'block' : 'none';
    });
  }
  function next() {
    current = (current + 1) % images.length;
    updateCarousel();
  }
  function prev() {
    current = (current - 1 + images.length) % images.length;
    updateCarousel();
  }
  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      next();
    }, 5000);
  }
  document.getElementById('carousel-prev').addEventListener('click', () => {
    prev();
    resetTimer();
  });
  document.getElementById('carousel-next').addEventListener('click', () => {
    next();
    resetTimer();
  });
  // Initialize
  updateCarousel();
  resetTimer();
})();

// Simple carousel logic for Kalaaparupaadikal section
(function() {
  const images = Array.from(document.querySelectorAll('#kala-carousel-track .kala-carousel-img'));
  if (!images.length) return;
  let current = 0;
  function updateCarousel() {
    images.forEach((img, idx) => {
      img.style.display = idx === current ? 'block' : 'none';
    });
  }
  function next() {
    current = (current + 1) % images.length;
    updateCarousel();
  }
  // Initialize
  updateCarousel();
  setInterval(next, 5000);
})();