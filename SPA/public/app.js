// HEY THERE BUDDY!.... ONLY PLACE CONTENT THAT APPLIES TO ALL PAGES HERE
/* Pro tip, link this app.js to your page in addition to your custom .js file*/
//console.log(firebase);

// MOBILE NAVBAR CODE
// had to add this for fitting navbar better on mobile
// document.addEventListener("DOMContentLoaded", () => {
//   const burger = document.querySelector(".navbar-burger");
//   const menu = document.getElementById("navMenu");

//   burger.addEventListener("click", () => {
//     burger.classList.toggle("is-active");
//     menu.classList.toggle("is-active");
//   });
// });

// burger function no DOMContentLoaded
const initNavbar = () => {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.getElementById("navMenu");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  }
};

initNavbar();
// sign up MODALTOGGLE
const signupButton = document.getElementById("signup_button");
const signupModal = document.getElementById("signup_modal");
const closeModal = document.querySelectorAll(".delete, #close_modal");

if (signupButton && signupModal) {
  signupButton.addEventListener("click", () => {
    signupModal.classList.add("is-active");
  });
}

closeModal.forEach((el) => {
  el.addEventListener("click", () => {
    signupModal.classList.remove("is-active");
  });
});

// LOGIN MODALTOGGLE
const loginButton = document.getElementById("login_button");
const loginModal = document.getElementById("signin_modal");
const login_closeModal = document.querySelectorAll(".delete, #close_modal");

if (loginButton && loginModal) {
  loginButton.addEventListener("click", () => {
    loginModal.classList.add("is-active");
  });
}

login_closeModal.forEach((el) => {
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
const admin_button = document.getElementById("admin_button");
const admin_page = document.getElementById("admin_page");
const quick_home = document.getElementById("quick_home");
const quick_resources = document.getElementById("quick_resources");
const quick_about = document.getElementById("quick_about");
const quick_contact = document.getElementById("quick_contact");
const quick_gallery = document.getElementById("quick_gallery");
const quick_team = document.getElementById("quick_team");
const quick_admin = document.getElementById("quick_admin");

// JS FOR WHEN HOME IS CLICKED
home_button.addEventListener("click", () => {
  home.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
  team.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
  admin_page.classList.add("is-hidden");
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
  admin_page.classList.add("is-hidden");
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
  admin_page.classList.add("is-hidden");
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
  admin_page.classList.add("is-hidden");
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
  admin_page.classList.add("is-hidden");
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
  admin_page.classList.add("is-hidden");
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
  admin_page.classList.add("is-hidden");
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
  admin_page.classList.add("is-hidden");
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
  admin_page.classList.add("is-hidden");
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
  admin_page.classList.add("is-hidden");
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
  admin_page.classList.add("is-hidden");
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
  admin_page.classList.add("is-hidden");
});
quick_contact.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

// JS FOR ADMIN PAGE
admin_button.addEventListener("click", () => {
  admin_page.classList.remove("is-hidden");
  contact_us.classList.add("is-hidden");
  resources.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  home.classList.add("is-hidden");
  team.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
});
admin_button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

quick_admin.addEventListener("click", () => {
  admin_page.classList.remove("is-hidden");
  contact_us.classList.add("is-hidden");
  resources.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  home.classList.add("is-hidden");
  team.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
});
quick_admin.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

// JS for admin page

// JS for Resources page
// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");

    // Check if the href is not just "#"
    if (targetId !== "#") {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
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

const msg_bar = document.querySelector("#message_bar");

function configure_msg_bar(msg, type = "success") {
  // display message
  msg_bar.innerHTML = msg;
  msg_bar.classList.remove("is-hidden");

  if (type === "error") {
    msg_bar.classList.add("has-background-danger");
    msg_bar.classList.remove("has-background-success");
  } else {
    msg_bar.classList.add("has-background-success");
    msg_bar.classList.remove("has-background-danger");
  }
  // hide after 3 seconds
  setTimeout(() => {
    msg_bar.classList.add("is-hidden");
    msg_bar.innerHTML = "";
  }, 3000);
}

const gallery_submit = document.querySelector("#gal_submit");

gallery_submit.addEventListener("click", async () => {
  //construct a Gallery object
  let file = document.querySelector("#gal_image").files[0];

  let image = new Date() + "_" + file.name;

  console.log(image);

  const task = ref.child(image).put(file);

  console.log(task);

  try {
    const snapshot = await task;
    const url = await snapshot.ref.getDownloadURL();

    console.log(url);

    let gallery_image = {
      // author: auth.currentUser.email,
      url: url,
      // desc: document.querySelector("gal_desc").value,
    };

    await db.collection("gallery").add(gallery_image);
    configure_msg_bar("You've added a gallery photo!");
    show_gallery();

    // Clear the form after successful submission   ADD DESC LATER
    document.querySelector("#gal_image").value = "";
  } catch (error) {
    // Handle any errors that occurred during the upload or form submission
    console.error("Error:", error);
  }
});

function del_doc(id) {
  db.collection("announcements")
    .doc(id)
    .delete()
    .then(() => {
      configure_msg_bar("announcement deleted!");
      show_announcements();
    });
}

function gal_del_doc(id) {
  db.collection("gallery")
    .doc(id)
    .delete()
    .then(() => {
      configure_msg_bar("Image deleted!");
      show_gallery();
    });
}

const ann_submit = document.querySelector("#ann_submit");

ann_submit.addEventListener("click", () => {
  let title = document.querySelector("#ann_title").value;
  let topic = document.querySelector("#ann_topic").value;
  let content = document.querySelector("#ann_content").value;

  let announcement = {
    title: title,
    topic: topic,
    content: content,
  };

  db.collection("announcements")
    .add(announcement)
    .then(() => {
      configure_msg_bar("announcement added!");
      show_announcements();
    });

  document.querySelector("#ann_title").value = "";
  document.querySelector("#ann_topic").value = "";
  document.querySelector("#ann_content").value = "";
});

// show announcements V1
// function show_announcements() {
//   db.collection("announcements")
//     .get()
//     .then((mydata) => {
//       let docs = mydata.docs;

//       let html = ``;

//       docs.forEach((d) => {
//         html += `<div class="card column">
//             <div class="card-content">
//               <p class="title">${
//                 d.data().title
//               } <button class="is-pulled-right" onclick="del_doc('${
//           d.id
//         }')">Delete</button></p>
//               <p class="subtitle">${d.data().topic}</p>
//               <div class="content">
//                 ${d.data().content}

//               </div>
//             </div>
//           </div>`;
//       });

//       document.querySelector("#columns").innerHTML = html;
//       if (docs.length == 0) {
//         document.querySelector(
//           "#columns"
//         ).innerHTML = `<div class="card column">
//             <div class="card-content">
//               <p class="title">No Announcements</p>
//             </div>
//           </div>`;
//       }
//     });
// }
// Show announcements V2
function show_announcements() {
  // First get the current user's admin status
  const currentUser = auth.currentUser;
  let isAdmin = false;

  // Function to actually build and display the announcements
  const displayAnnouncements = (isAdmin) => {
    db.collection("announcements")
      .get()
      .then((mydata) => {
        let docs = mydata.docs;
        let html = ``;

        docs.forEach((d) => {
          html += `<div class="card column">
            <div class="card-content">
              <p class="title">${d.data().title} ${
            isAdmin
              ? `<button class="is-pulled-right" onclick="del_doc('${d.id}')">Delete</button>`
              : ""
          }</p>
              <p class="subtitle">${d.data().topic}</p>
              <div class="content">
                ${d.data().content}
              </div>
            </div>
          </div>`;
        });

        document.querySelector("#columns").innerHTML = html;
        if (docs.length == 0) {
          document.querySelector("#columns").innerHTML = `
            <div class="card column">
              <div class="card-content">
                <p class="title">No Announcements</p>
              </div>
            </div>`;
        }
      });
  };

  // Check if user is logged in
  if (currentUser) {
    // Get user's admin status from Firestore
    db.collection("users")
      .doc(currentUser.email)
      .get()
      .then((doc) => {
        isAdmin = doc.data()?.admin === 1;
        displayAnnouncements(isAdmin);
      })
      .catch((error) => {
        console.error("Error checking admin status:", error);
        displayAnnouncements(false);
      });
  } else {
    // Not logged in, show announcements without delete button
    displayAnnouncements(false);
  }
}

function show_gallery() {
  db.collection("gallery")
    .get()
    .then((mydata) => {
      let docs = mydata.docs;

      let html = ``;

      docs.forEach((d) => {
        html += `<div class="gallery_card column">
      <div class="card-image">
        <a> <img src="${d.data().url}" /></a>
        
      </div>
    
      <button class="overlay-button" style="" onclick="gal_del_doc('${
        d.id
      }')">Delete</button>
    
    </div>`;
      });
      document.querySelector("#gallery_collection").innerHTML = html;
    });
}

show_announcements();
show_gallery();

//submitting a message on contact us
// document.addEventListener("DOMContentLoaded", function () {
//   const submitButton = document.querySelector("#submit_btn");

//   if (submitButton) {
//     submitButton.addEventListener("click", function () {
//       const contact_email = document.querySelector("#contact_email").value;
//       const subject = document.querySelector("#subject").value;
//       const message_body = document.querySelector("#message_body").value;

//       // Validation
//       if (!contact_email || !subject || !message_body) {
//         configure_msg_bar("Please fill in all fields!", "error");
//         return;
//       }

//       const message = {
//         contact_email: contact_email,
//         subject: subject,
//         message_body: message_body,
//       };

//       // Add console.log to debug
//       console.log("Attempting to send message:", message);

//       db.collection("messages")
//         .add(message)
//         .then(() => {
//           configure_msg_bar("Message sent!", "success");
//           document.getElementById("contact_form").reset();
//           console.log("Message sent successfully");
//         })
//         .catch((error) => {
//           console.error("Error writing to database:", error);
//           configure_msg_bar("Error sending message: " + error.message, "error");
//         });
//     });
//   } else {
//     console.error("Submit button not found");
//   }
// });

// new message submit function
const initContactForm = () => {
  const submitButton = document.querySelector("#submit_btn");

  if (submitButton) {
    submitButton.addEventListener("click", function () {
      const contact_email = document.querySelector("#contact_email").value;
      const subject = document.querySelector("#subject").value;
      const message_body = document.querySelector("#message_body").value;

      // Validation
      if (!contact_email || !subject || !message_body) {
        configure_msg_bar("Please fill in all fields!", "error");
        return;
      }

      const message = {
        contact_email: contact_email,
        subject: subject,
        message_body: message_body,
      };

      // Add console.log to debug
      console.log("Attempting to send message:", message);

      db.collection("messages")
        .add(message)
        .then(() => {
          configure_msg_bar("Message sent!", "success");
          document.getElementById("contact_form").reset();
          console.log("Message sent successfully");
        })
        .catch((error) => {
          console.error("Error writing to database:", error);
          configure_msg_bar("Error sending message: " + error.message, "error");
        });
    });
  } else {
    console.error("Submit button not found");
  }
};

initContactForm();

let admin_view = document.querySelectorAll(".admin");

const signupForm = document.getElementById("signup_form");
const signup_button = document.getElementById("signup_button");
const login_button = document.getElementById("login_button");
const logout_button = document.getElementById("logout_button");

// SIGNUP
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let signup_email = document.querySelector("#signup_email").value;
  let signup_pass = document.querySelector("#signup_password").value;
  // let signup_name = document.querySelector("#full_name").value;

  // Firebase Authentication to create a new user
  firebase
    .auth()
    .createUserWithEmailAndPassword(signup_email, signup_pass)
    .then((userCredential) => {
      // User successfully signed up
      const user = userCredential.user;
      configure_msg_bar(`User ${signup_email} created successfully!`);

      // close the modal after signup
      closeSignupModal();

      // You can also add additional code to save more user info to Firestore
      const userInfo = {
        email: signup_email,
        // name: signup_name,
        admin: 0,
        createdAt: new Date(),
      };

      return firebase
        .firestore()
        .collection("users")
        .doc(signup_email)
        .set(userInfo);
    })
    .then(() => {
      console.log("User info saved to Firestore.");
    })
    .catch((error) => {
      // Handle errors here
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});

// SIGNIN
signin_form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.querySelector("#signin_email").value;
  let pass = document.querySelector("#signin_password").value;

  auth.signInWithEmailAndPassword(email, pass).then((userCredential) => {
    const user = userCredential.user;
    configure_msg_bar(`User ${email} signed in!`);
    document.querySelector("#signin_modal").classList.remove("is-active");
  });
});

// LOGOUT

logout_button.addEventListener("click", () => {
  auth.signOut().then(() => {
    // display a message that user signed out
    document.querySelector("#signin_modal").classList.remove("is-active");
    configure_msg_bar("You are now signed out!");
    home_button.click();
  });
});

// Function to close the modal
function closeSignupModal() {
  const modal = document.querySelector("#signup_modal");
  modal.classList.remove("is-active"); // Adjust according to your Bulma modal styling
}

// Event listener for modal close button
const closeModalButton = document.querySelector("#close_modal");
if (closeModalButton) {
  closeModalButton.addEventListener("click", closeSignupModal);
}

// commenting out there is already a onAuthStateChanged event listener below,
// added functionality was doing referesh for when admin and reg user login and refreshing on logout
// auth.onAuthStateChanged((user) => {
//   if (user) {
//     document.querySelector(
//       "#view_user"
//     ).innerHTML += `&nbsp; user: ${user.email}`;
//     login_button.classList.add("is-hidden");
//     signup_button.classList.add("is-hidden");
//     logout_button.classList.remove("is-hidden");

//     db.collection("users")
//       .doc(user.email)
//       .get()
//       .then((d) => {
//         // admin value of 1 means admin user. a value of 0 means no admin
//         let admin = d.data().admin;
//         console.log(admin);

//         if (admin == 1) {
//           // admin can see admin editing boxes
//           admin_view.forEach((a) => {
//             a.classList.remove("is-hidden");
//           });
//         } else {
//           // a signed-in admin user can view and edit user roles
//           admin_view.forEach((a) => {
//             a.classList.add("is-hidden");
//           });
//         }
//       });
//   } else {
//     login_button.classList.remove("is-hidden");
//     signup_button.classList.remove("is-hidden");
//     logout_button.classList.add("is-hidden");
//     document.querySelector("#view_user").innerHTML = "";

//     admin_view.forEach((a) => {
//       a.classList.add("is-hidden");
//     });
//   }
// });

// gallery function v1
// document.addEventListener("DOMContentLoaded", function () {
//   let slideIndex = 0;
//   const slides = document.querySelectorAll(".rotating-gallery .slide");
//   const nextButton = document.getElementById("next");
//   const prevButton = document.getElementById("prev");

//   // Function to show a particular slide
//   function showSlide(index) {
//     slides.forEach((slide, i) => {
//       slide.style.display = i === index ? "block" : "none";
//     });
//   }

//   // Function to move to the next slide
//   function nextSlide() {
//     slideIndex = (slideIndex + 1) % slides.length; // Loop to the beginning if at the end
//     showSlide(slideIndex);
//   }

//   // Function to move to the previous slide
//   function prevSlide() {
//     slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Loop to the end if at the beginning
//     showSlide(slideIndex);
//   }

//   // Set up click event listeners for next and previous buttons
//   nextButton.addEventListener("click", nextSlide);
//   prevButton.addEventListener("click", prevSlide);

//   // Set up autoplay to change slides every 3 seconds
//   setInterval(nextSlide, 3000);

//   // Initial display of the first slide
//   showSlide(slideIndex);
// });

// gallery function v2
const initGallery = () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".rotating-gallery .slide");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  // Check if required elements exist
  if (!slides.length || !nextButton || !prevButton) {
    console.error("Gallery elements not found");
    return;
  }

  // Function to show a particular slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  // Function to move to the next slide
  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; // Loop to the beginning if at the end
    showSlide(slideIndex);
  }

  // Function to move to the previous slide
  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Loop to the end if at the beginning
    showSlide(slideIndex);
  }

  // Set up click event listeners for next and previous buttons
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Set up autoplay to change slides every 3 seconds
  setInterval(nextSlide, 3000);

  // Initial display of the first slide
  showSlide(slideIndex);
};

initGallery();

// Function to display all users and allow admin actions if applicable
function all_users(mode) {
  // Fetch all users from Firestore
  db.collection("users")
    .get()
    .then((data) => {
      let mydocs = data.docs;
      let html = ``;

      mydocs.forEach((doc) => {
        let userData = doc.data();
        let isAdmin = userData.admin === 1 ? "Admin" : "Non-Admin";
        let badgeClass = userData.admin === 1 ? "is-success" : "is-warning";
        let userName = userData.name ? userData.name : "N/A"; // Use "N/A" if the name is not defined

        html += `
        <tr>
          <td>${userName}</td>
          <td>${doc.id}</td>
          <td>
            <span class="tag ${badgeClass} is-light">${isAdmin}</span>
          </td>
          <td>
            ${
              mode === "edit" && doc.id !== auth.currentUser.email
                ? userData.admin === 0
                  ? `<button onclick="make_admin('${doc.id}')" class="button is-small is-link is-outlined">Make Admin</button>`
                  : `<button onclick="make_regular_user('${doc.id}')" class="button is-small is-danger is-outlined">Revoke Admin</button>`
                : ""
            }
          </td>
        </tr>`;
      });

      document.querySelector("#all_users_list").innerHTML = html;
    });
}

// Function to promote a user to admin
function make_admin(id) {
  db.collection("users")
    .doc(id)
    .update({
      admin: 1,
    })
    .then(() => all_users("edit"));
}

// Function to demote an admin to a regular user
function make_regular_user(id) {
  db.collection("users")
    .doc(id)
    .update({
      admin: 0,
    })
    .then(() => all_users("edit"));
}

// Check if user is an admin and load appropriate user management functionality
// auth.onAuthStateChanged((user) => {
//   if (user) {
//     db.collection("users")
//       .doc(user.email)
//       .get()
//       .then((d) => {
//         let admin = d.data().admin;

//         if (admin == 0) {
//           // If a regular user, just display the users
//           all_users("view");
//         } else {
//           // If an admin, display users with edit options
//           all_users("edit");
//         }

//         update_status(1, admin, user.uid, user.email);
//       });
//   } else {
//     // User not authenticated, hide user details
//     all_users(0);
//     update_status(0, "", "", "");
//   }
// });

// changes to onAuthStateChanged
// Added show_announcements() call after checking admin status
// Added show_announcements() call in the else block for non-admin users
// Added show_announcements() call when user logs out
// Removed the console error about update_status being undefined appeared to be leftover from samer's code

auth.onAuthStateChanged((user) => {
  if (user) {
    document.querySelector(
      "#view_user"
    ).innerHTML = `&nbsp; user: ${user.email}`;
    login_button.classList.add("is-hidden");
    signup_button.classList.add("is-hidden");
    logout_button.classList.remove("is-hidden");

    db.collection("users")
      .doc(user.email)
      .get()
      .then((d) => {
        let admin = d.data().admin;
        console.log(admin);

        if (admin == 1) {
          // admin can see admin editing boxes
          admin_view.forEach((a) => {
            a.classList.remove("is-hidden");
          });
          // Call all_users with edit mode for admins
          all_users("edit");
          show_announcements();
        } else {
          // a signed-in admin user can view and edit user roles
          admin_view.forEach((a) => {
            a.classList.add("is-hidden");
          });
          // Call all_users with view mode for regular users
          all_users("view");
          show_announcements();
        }
      });
  } else {
    login_button.classList.remove("is-hidden");
    signup_button.classList.remove("is-hidden");
    logout_button.classList.add("is-hidden");
    document.querySelector("#view_user").innerHTML = "";

    admin_view.forEach((a) => {
      a.classList.add("is-hidden");
    });
    show_announcements();
  }
});
