// HEY THERE BUDDY!.... ONLY PLACE CONTENT THAT APPLIES TO ALL PAGES HERE

/* Pro tip, link this app.js to your page in addition to your custom .js file*/

// MOBILE NAVBAR CODE
// had to add this for fitting navbar better on mobile
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.getElementById("navMenu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
});

// MODALTOGGLE
const loginButton = document.getElementById("login_button");
const loginModal = document.getElementById("signin_modal");
const closeModal = document.querySelectorAll(".delete, #close_modal");

if (loginButton && loginModal) {
  loginButton.addEventListener("click", () => {
    loginModal.classList.add("is-active");
  });
}

closeModal.forEach((el) => {
  el.addEventListener("click", () => {
    loginModal.classList.remove("is-active");
  });
});

// WEBPAGE JAVASCRIPT
const home = document.getElementById("home");
const home_button = document.getElementById("home_button");
const resources = document.getElementById("resources");
const resources_button = document.getElementById("resources_button");
const about_us = document.getElementById("about_us");
const about_button = document.getElementById("about_button");
const gallery = document.getElementById("gallery");
const gallery_button = document.getElementById("gallery_button");
const team = document.getElementById("team");
const team_button = document.getElementById("team_button");
const contact_us = document.getElementById("contact_us");
const contact_button = document.getElementById("contact_button");
const quick_home = document.getElementById("quick_home");
const quick_resources = document.getElementById("quick_resources");
const quick_about = document.getElementById("quick_about");
const quick_contact = document.getElementById("quick_contact");
const quick_gallery = document.getElementById("quick_gallery");
const quick_team = document.getElementById("quick_team");

// JS FOR WHEN HOME IS CLICKED
home_button.addEventListener("click", () => {
  home.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
  team.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
  show_announcements();
});
home_button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

quick_home.addEventListener("click", () => {
  home.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
  team.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
  show_announcements();
});
quick_home.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

// JS FOR RESOURCES
resources_button.addEventListener("click", () => {
  resources.classList.remove("is-hidden");
  home.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
  team.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
});
resources_button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

quick_resources.addEventListener("click", () => {
  resources.classList.remove("is-hidden");
  home.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
  team.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
});
quick_resources.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

// JS FOR ABOUT US
about_button.addEventListener("click", () => {
  about_us.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  home.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
  team.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
});
about_button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

quick_about.addEventListener("click", () => {
  about_us.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  home.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
  team.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
});
quick_about.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

// JS FOR GALLERY
gallery_button.addEventListener("click", () => {
  gallery.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  home.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
  home.classList.add("is-hidden");
  team.classList.add("is-hidden");
});
gallery_button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

quick_gallery.addEventListener("click", () => {
  gallery.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  home.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
  home.classList.add("is-hidden");
  team.classList.add("is-hidden");
});
quick_gallery.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

// JS FOR OUR TEAM
team_button.addEventListener("click", () => {
  team.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  home.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
  home.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
});
team_button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

quick_team.addEventListener("click", () => {
  team.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  home.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
  home.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
});
quick_team.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

// JS FOR CONTACT US
contact_button.addEventListener("click", () => {
  contact_us.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  home.classList.add("is-hidden");
  team.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
});
contact_button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

quick_contact.addEventListener("click", () => {
  contact_us.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  home.classList.add("is-hidden");
  team.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
});
quick_contact.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

// JS for Resources page
// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    item.classList.toggle("is-active");
    const answer = item.querySelector(".faq-answer");
    if (item.classList.contains("is-active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = "0px";
    }
  });
});

// Show More Button for Extra Content
const showMoreBtn = document.getElementById("show_more_btn");
const hiddenContent = document.querySelectorAll(".hidden-content");

if (showMoreBtn) {
  showMoreBtn.addEventListener("click", () => {
    hiddenContent.forEach((content) => {
      content.classList.remove("hidden-content");
    });
    showMoreBtn.style.display = "none"; // Hide the button after clicking
  });
}

function del_doc(id) {
  db.collection("announcements")
    .doc(id)
    .delete()
    .then(() => {
      alert("announcement deleted");
      show_announcements();
    });
}

const ann_submit = document.querySelector("#ann_submit");

ann_submit.addEventListener("click", () => {
  let title = document.querySelector("#ann_title").value;
  let topic = document.querySelector("#ann_topic").value;
  let content = document.querySelector("#ann_content").value;

  console.log(title);

  let announcement = {
    title: title,
    topic: topic,
    content: content,
  };

  console.log(announcement);

  db.collection("announcements")
    .add(announcement)
    .then(() => {
      alert("announcement added");
      show_announcements();
    });

  document.querySelector("#ann_title").value = "";
  document.querySelector("#ann_topic").value = "";
  document.querySelector("#ann_content").value = "";
});

function show_announcements() {
  db.collection("announcements")
    .get()
    .then((mydata) => {
      let docs = mydata.docs;

      let html = ``;

      docs.forEach((d) => {
        html += `<div class="card column">
            <div class="card-content">
              <p class="title">${
                d.data().title
              } <button class="is-pulled-right" onclick="del_doc('${
          d.id
        }')">Delete</button></p>
              <p class="subtitle">${d.data().topic}</p>
              <div class="content">
                ${d.data().content}
               
              </div>
            </div>
          </div>`;
      });

      document.querySelector("#columns").innerHTML = html;
      if (docs.length == 0) {
        document.querySelector(
          "#columns"
        ).innerHTML = `<div class="card column">
            <div class="card-content">
              <p class="title">No Announcements</p>
            </div>
          </div>`;
      }
    });
}

show_announcements();
