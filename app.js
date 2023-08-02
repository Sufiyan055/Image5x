/* Navbar open and close */
const logoNav = document.querySelector(".logoNav");

/* logoNav.style.maxHeight = "48px";
function menuicon() {
  if (logoNav.style.maxHeight == "48px") {
    logoNav.style.maxHeight = "145px";
  } else {
    logoNav.style.maxHeight = "48px";
  }
} */
/* Navbar open and close */

/* Show Images by searching the content  */

const accessKey = "Pjkr3yfGVW8XlzCKTkpGpBcGIH38osYnd5wp4y4Ak28";

const SearchLogoBtn = document.getElementById("SearchLogoBtn");

const searchBar = document.getElementById("searchBar");

const imagesbar = document.getElementById("imagesbar");

const showMorebtn = document.getElementById("showMorebtn");

const someSearchIcon = document.getElementsByClassName("someSearchIcon");

const containerBg = document.querySelector(".container");

let keyword = "";
let page = 1;

/* Below is to show when the user enter the website for the first time. */
async function ImagesHtml() {
  keyword = searchBar.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=images&client_id=${accessKey}&per_page=20`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    imagesbar.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    imagesbar.appendChild(imageLink);
  });
}
ImagesHtml();
/* Above is to show when the user enter the website for the first time. */
async function searchImages() {
  keyword = searchBar.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=10`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    imagesbar.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    imagesbar.appendChild(imageLink);
    showMorebtn.style.display = "block";
  });
}

SearchLogoBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

function showMoreNow() {
  page++;
  searchImages();
}
showMoreNow();

/* Show Images by searching the content  */

/*--------------------------------------- search images by button  ------------------------------------------------*/

async function btnSearchYes() {
  const data = await response.json();
  if (page === 1) {
    imagesbar.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    imagesbar.appendChild(imageLink);
  });
}

/* here made this below for every button */

const btnNature = document.querySelector(".btnNature");
const btnflower = document.querySelector(".btnflower");
const btncity = document.querySelector(".btncity");
const btnanimal = document.querySelector(".btnanimal");
const btntravel = document.querySelector(".btntravel");
const btnfood = document.querySelector(".btnfood");
const btnfashion = document.querySelector(".btnfashion");
const btnwork = document.querySelector(".btnwork");
const btnsports = document.querySelector(".btnsports");
const btngadgets = document.querySelector(".btngadgets");
const btnarchitecture = document.querySelector(".btnarchitecture");
const btncartoon = document.querySelector(".btncartoon");
const btndoctor = document.querySelector(".btndoctor");
const btnhotel = document.querySelector(".btnhotel");
const btngarden = document.querySelector(".btngarden");
const btnperson = document.querySelector(".btnperson");
const btnhome = document.querySelector(".btnhome");

/*  */

async function searchBybtn() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=nature&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
  showMorebtn.style.display = "none";
}

btnNature.addEventListener("click", (e) => {
  page = 1;
  searchBybtn();
});

/* flower  */
async function searchbtnflower() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=flower&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btnflower.addEventListener("click", (e) => {
  page = 1;
  searchbtnflower();
});
/* city */

async function searchbtncity() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=city&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btncity.addEventListener("click", (e) => {
  page = 1;
  searchbtncity();
});
/* Animal */

async function searchbtnanimal() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=animal&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btnanimal.addEventListener("click", (e) => {
  page = 1;
  searchbtnanimal();
});
/* Travel */

async function searchbtntravel() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=travel&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btntravel.addEventListener("click", (e) => {
  page = 1;
  searchbtntravel();
});
/* Food */

async function searchbtnfood() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=food&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btnfood.addEventListener("click", (e) => {
  page = 1;
  searchbtnfood();
});
/* Fashion */

async function searchbtnfashion() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=fashion&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btnfashion.addEventListener("click", (e) => {
  page = 1;
  searchbtnfashion();
});
/* Work */

async function searchbtnwork() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=work&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btnwork.addEventListener("click", (e) => {
  page = 1;
  searchbtnwork();
});
/* Sports */

async function searchbtnsports() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=sports&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btnsports.addEventListener("click", (e) => {
  page = 1;
  searchbtnsports();
});
/* Gadgets */

async function searchbtngadgets() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=gadget&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btngadgets.addEventListener("click", (e) => {
  page = 1;
  searchbtngadgets();
});
/* Architecture */

async function searchbtnarchitecture() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=architecture&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btnarchitecture.addEventListener("click", (e) => {
  page = 1;
  searchbtnarchitecture();
});
/* Cartoon */

async function searchbtncartoon() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=cartoon&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btncartoon.addEventListener("click", (e) => {
  page = 1;
  searchbtncartoon();
});

/* Doctor */
async function searchbtndoctor() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=doctor&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btndoctor.addEventListener("click", (e) => {
  page = 1;
  searchbtndoctor();
});

/* Home */
async function searchbtnhome() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=home&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btnhome.addEventListener("click", (e) => {
  page = 1;
  searchbtnhome();
});
/* Hotel */
async function searchbtnhotel() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=hotel&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btnhotel.addEventListener("click", (e) => {
  page = 1;
  searchbtnhotel();
});
/* Garden */
async function searchbtngarden() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=garden&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btngarden.addEventListener("click", (e) => {
  page = 1;
  searchbtngarden();
});
/* Person */
async function searchbtnperson() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=person&client_id=${accessKey}&per_page=35`;
  response = await fetch(url);
  btnSearchYes();
}

btnperson.addEventListener("click", (e) => {
  page = 1;
  searchbtnperson();
});

/* here made this above for every button */

/*--------------------------- search images by button ----------------------------------------*/

/* All button  */
const tabsBox = document.querySelector(".tabs-box");
allTabs = document.querySelectorAll(".tab");
arrowIcons = document.querySelectorAll(".icon span");

let isDragging = false;

const handleIcons = () => {
  let scrollVal = Math.round(tabsBox.scrollLeft);
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
  arrowIcons[1].parentElement.style.display =
    maxScrollableWidth > scrollVal ? "flex" : "none";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
    setTimeout(() => handleIcons(), 50);
  });
});

allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsBox.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
  });
});

const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcons();
};

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("mousedown", () => (isDragging = true));
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

/*  All button */
