// MOBILE NAVBAR CODE
//   burger.addEventListener("click", () => {
//     burger.classList.toggle("is-active");
//     menu.classList.toggle("is-active");
//   });
// });

// burger function no DOMContentLoaded
// const initNavbar = () => {
//   const burger = document.querySelector(".navbar-burger");
//   const menu = document.getElementById("navMenu");

//   if (burger && menu) {
//     burger.addEventListener("click", () => {
//       burger.classList.toggle("is-active");
//       menu.classList.toggle("is-active");
//     });
//   }
// };

// new burger function to hide when clicked
const initNavbar = () => {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.getElementById("navMenu");

  if (burger && menu) {
    // Toggle menu on burger click
    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });

    // Add click event to all links in the menu
    const links = menu.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        // Close the menu and deactivate the burger
        burger.classList.remove("is-active");
        menu.classList.remove("is-active");
      });
    });
  }
};

initNavbar();
// sign up fTOGGLE
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
const admin_messages_modal = document.getElementById("admin_messages_modal");
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
  admin_messages_modal.classList.add("is-hidden");
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
  admin_messages_modal.classList.add("is-hidden");
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
  admin_messages_modal.classList.add("is-hidden");
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
  admin_messages_modal.classList.add("is-hidden");
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
  admin_messages_modal.classList.add("is-hidden");
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
  about_us.classList.add("is-hidden");
  // home.classList.add("is-hidden"); removed extra
  team.classList.add("is-hidden");
  admin_page.classList.add("is-hidden");
  admin_messages_modal.classList.add("is-hidden");
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
  about_us.classList.add("is-hidden");
  // home.classList.add("is-hidden"); removed extra
  team.classList.add("is-hidden");
  admin_page.classList.add("is-hidden");
  admin_messages_modal.classList.add("is-hidden");
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
  about_us.classList.add("is-hidden");
  // home.classList.add("is-hidden"); removed extra
  gallery.classList.add("is-hidden");
  admin_page.classList.add("is-hidden");
  admin_messages_modal.classList.add("is-hidden");
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
  about_us.classList.add("is-hidden");
  // home.classList.add("is-hidden"); removed extra
  gallery.classList.add("is-hidden");
  admin_page.classList.add("is-hidden");
  admin_messages_modal.classList.add("is-hidden");
});
quick_team.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

// // JS FOR CONTACT US
// contact_button.addEventListener("click", () => {
//   contact_us.classList.remove("is-hidden");
//   resources.classList.add("is-hidden");
//   about_us.classList.add("is-hidden");
//   home.classList.add("is-hidden");
//   team.classList.add("is-hidden");
//   gallery.classList.add("is-hidden");
//   admin_page.classList.add("is-hidden");
//   handleContactPageVisibility(); // Add this line
// });
// contact_button.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth", // Smooth scroll animation
//   });
// };

quick_contact.addEventListener("click", () => {
  contact_us.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  home.classList.add("is-hidden");
  team.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
  admin_page.classList.add("is-hidden");
  admin_messages_modal.classList.add("is-hidden");
});
quick_contact.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

//JS FOR ADMIN MESSAGES PAGE
// admin_messages_modal.addEventListener("click", () => {
//   admin_messages_modal.classList.remove("is-hidden");
//   contact_us.classList.add("is-hidden");
//   resources.classList.add("is-hidden");
//   about_us.classList.add("is-hidden");
//   home.classList.add("is-hidden");
//   team.classList.add("is-hidden");
//   gallery.classList.add("is-hidden");
//   admin_page.classList.add("is-hidden");
// });
// admin

// JS FOR ADMIN PAGE
admin_button.addEventListener("click", () => {
  admin_page.classList.remove("is-hidden");
  contact_us.classList.add("is-hidden");
  resources.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  home.classList.add("is-hidden");
  team.classList.add("is-hidden");
  gallery.classList.add("is-hidden");
  admin_messages_modal.classList.add("is-hidden");
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
  admin_messages_modal.classList.add("is-hidden");
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
  let title = document.querySelector("#gal_ttl").value;
  const task = ref.child(image).put(file);

  try {
    const snapshot = await task;
    const url = await snapshot.ref.getDownloadURL();

    let gallery_image = {
      // author: auth.currentUser.email,
      title: title,
      url: url,
      // desc: document.querySelector("gal_desc").value,
    };
    const docID = new Date().toISOString();

    await db.collection("gallery").doc(docID).set(gallery_image);
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
      checkAdminStatus(); // Ensure admin buttons remain visible after deletion
    });
}

function res_del_doc(id) {
  db.collection("resources")
    .doc(id)
    .delete()
    .then(() => {
      configure_msg_bar("Resource card deleted!");
      show_resources();
    });
}

const deleteUser = (userId) => {
  if (confirm("Are you sure you want to delete this user?")) {
    db.collection("users")
      .doc(userId)
      .delete()
      .then(() => {
        configure_msg_bar("User deleted successfully!");
        all_users("edit"); // Reload messages
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        configure_msg_bar("Error deleting user", "error");
      });
  }
};

const ann_submit = document.querySelector("#ann_submit");

ann_submit.addEventListener("click", () => {
  let title = document.querySelector("#ann_title").value;
  let topic = document.querySelector("#ann_topic").value;
  let content = document.querySelector("#ann_content").value;
  const docID = new Date().toISOString();

  let announcement = {
    title: title,
    topic: topic,
    content: content,
  };

  db.collection("announcements")
    .doc(docID)
    .set(announcement)
    .then(() => {
      configure_msg_bar("announcement added!");
      show_announcements();
    });

  document.querySelector("#ann_title").value = "";
  document.querySelector("#ann_topic").value = "";
  document.querySelector("#ann_content").value = "";
});

const resources_submit = document.querySelector("#tile_submit");

resources_submit.addEventListener("click", async () => {
  let file = document.querySelector("#tile_image").files[0];

  let image = new Date() + "_" + file.name;
  let title = document.querySelector("#tile_title").value;
  let content = document.querySelector("#tile_content").value;
  let link = document.querySelector("#tile_link").value;
  const task = ref.child(image).put(file);

  try {
    const snapshot = await task;
    const url = await snapshot.ref.getDownloadURL();

    let resources_tile = {
      image: url,
      title: title,
      content: content,
      link: link,
    };
    const docID = new Date().toISOString();

    await db.collection("resources").doc(docID).set(resources_tile);
    configure_msg_bar("You've added a resources card!");
    show_resources();

    document.querySelector("#tile_image").value = "";
    document.querySelector("#tile_title").value = "";
    document.querySelector("#tile_link").value = "";
    document.querySelector("#tile_content").value = "";
  } catch (error) {
    // Handle any errors that occurred during the upload or form submission
    console.error("Error:", error);
  }
});

show_resources();

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
        let docs = mydata.docs.reverse();
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
        let date = d.id.split("").splice(0, 10).join("");

        // commenting this out so it doesn't display in the console
        // console.log(date);

        html += `<div class="gallery_card column">
          <div class="card-header-title"> ${
            d.data().title
          } <p class="admin is-hidden">-- ${date}</p>
          </div>
          <div class="card-image">
            <a> <img src="${d.data().url}" /></a>
          </div>
          <button class="overlay-button admin is-hidden" onclick="gal_del_doc('${
            d.id
          }')">Delete</button>
        </div>`;
      });
      document.querySelector("#gallery_collection").innerHTML = html;

      // Check if the user is an admin and show admin elements
      checkAdminStatus();
    });
}

function show_resources() {
  db.collection("resources")
    .get()
    .then((mydata) => {
      let docs = mydata.docs;
      let html = ``;

      docs.forEach((d) => {
        html += `
                  <div class="column is-one-third">
                      <div class="card feature-card" style="box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2)">
                          <div class="card-image">
                              <figure class="image is-4by3">
                                  <img src="${
                                    d.data().image
                                  }" alt="Resource Tile Image" />
                              </figure>
                          </div>
                          <div class="card-content has-text-centered">
                              <button class="is-pulled-right admin is-hidden" onclick="res_del_doc('${
                                d.id
                              }')">Delete</button>
                              <h3 class="title is-5 has-text-dark">${
                                d.data().title
                              }</h3>
                              <p class="has-text-grey-dark">${
                                d.data().content
                              }</p>
                              <a href="${
                                d.data().link
                              }" class="button is-warning is-outlined is-rounded mt-3" style="transition: transform 0.3s">Learn More</a>
                          </div>
                      </div>
                  </div>
              `;
      });

      document.querySelector("#resource_tiles").innerHTML = html;

      // Ensure admin elements are visible if applicable
      checkAdminStatus();
    });
}

show_announcements();
show_gallery();

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
      // add timestamp to message
      const timestamp = new Date().toISOString(); // Generate timestamp

      const message = {
        contact_email: contact_email,
        subject: subject,
        message_body: message_body,
        timestamp: timestamp, // Include timestamp
      };

      db.collection("messages")
        .add(message)
        .then(() => {
          configure_msg_bar("Message sent!", "success");
          document.getElementById("contact_form").reset();
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
  let signup_name = document.querySelector("#full_name").value;

  // Basic validation
  if (!signup_email || !signup_pass || !signup_name) {
    // configure_msg_bar("Please fill in all fields", "error");
    alert("Please fill in all fields", "error");
    return;
  }

  // Variable to store the created user reference
  let createdUser;

  firebase
    .auth()
    .createUserWithEmailAndPassword(signup_email, signup_pass)
    .then((userCredential) => {
      // Store the user reference
      createdUser = userCredential.user;

      const userInfo = {
        email: signup_email,
        name: signup_name,
        admin: 0,
        createdAt: new Date(),
      };

      // Return Firestore operation
      return firebase
        .firestore()
        .collection("users")
        .doc(signup_email)
        .set(userInfo)
        .catch((firestoreError) => {
          // If Firestore operation fails, delete the auth user and throw error
          console.error("Error saving to Firestore:", firestoreError);
          return createdUser.delete().then(() => {
            throw new Error(
              "Failed to create user profile. Please try again. Error: " +
                firestoreError.message
            );
          });
        });
    })
    .then(() => {
      // Both Authentication and Firestore operations succeeded
      configure_msg_bar(`User ${signup_email} created successfully!`);

      // Clear input fields
      document.querySelector("#signup_email").value = "";
      document.querySelector("#signup_password").value = "";
      document.querySelector("#full_name").value = "";

      // Close the modal
      closeSignupModal();
    })
    .catch((error) => {
      // Handle all errors here
      console.error("Error during signup process:", error);

      // If we have a created user but reached an error, ensure cleanup
      if (createdUser) {
        createdUser.delete().catch((deleteError) => {
          console.error("Error deleting incomplete user:", deleteError);
        });
      }

      // Show error to user
      // configure_msg_bar("Error: " + error.message, "error");
      alert("Error: " + error.message, "error");

      // Keep the form open so user can try again
      document.querySelector("#signup_password").value = "";
    });
});

// SIGNIN
signin_form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.querySelector("#signin_email").value;
  let pass = document.querySelector("#signin_password").value;

  auth
    .signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      configure_msg_bar(`User ${email} signed in!`);

      // Clear input fields after successful login
      document.querySelector("#signin_email").value = "";
      document.querySelector("#signin_password").value = "";

      // Close the login modal
      document.querySelector("#signin_modal").classList.remove("is-active");
    })
    .catch((error) => {
      // Handle errors here
      alert("The username or password is incorrect");
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

// gallery function v2
function showGalleryCarousel() {
  const galleryContainer = document.querySelector(".rotating-gallery");
  const slidesContainer = document.querySelector(".rotating-gallery");
  const slides = document.querySelectorAll(".rotating-gallery .slide");

  if (!galleryContainer || !slidesContainer) {
    console.error("Gallery container not found.");
    return;
  }

  // Fetch images dynamically from the gallery collection
  db.collection("gallery")
    .get()
    .then((querySnapshot) => {
      let slidesHTML = "";
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        slidesHTML += `
          <div class="slide">
            <img src="${data.url}" alt="${data.title}" />
          </div>
        `;
      });

      // Update the gallery container with the slides
      slidesContainer.innerHTML = slidesHTML;

      // Reinitialize the carousel
      initGallery();
    })
    .catch((error) => {
      console.error("Error fetching gallery images: ", error);
    });
}

function initGallery() {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".rotating-gallery .slide");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  if (!slides.length) {
    console.error("No slides found for the rotating gallery.");
    return;
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  if (nextButton && prevButton) {
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  }

  setInterval(nextSlide, 3000);
  showSlide(slideIndex);
}

// Call the function to show the gallery carousel
showGalleryCarousel();

const bylaws_submission = document.getElementById("bylaws_submit");

bylaws_submission.addEventListener("click", (e) => {
  let url = document.querySelector("#bylaws_upload").value;
  document.querySelector(
    "#tiles > div:nth-child(4) > div.card-image > a"
  ).href = url;
  configure_msg_bar("New Bylaws uploaded!");
  document.querySelector("#bylaws_upload").value = "";
});

// const feature_submit = document.getElementById("feature_submit");

// feature_submit.addEventListener("click", (e) => {
//   // let link = document.querySelector("#feature_link").value;
//   // let file = document.querySelector("#feature_image").files[0];

//   let link = document.querySelector("#feature_link").value;
//   let fileInput = document.querySelector("#feature_image");
//   let file = fileInput.files[0];

//   if (!file || !link) {
//     console.error("File or link is missing.");
//     configure_msg_bar("Please provide both a file and a link!");
//     return;
//   }

//   // Create a URL for the uploaded file
//   const fileURL = URL.createObjectURL(file);

//   // Update the link and image in the DOM
//   let anchor = document.querySelector("#main_resource > a");
//   let img = document.querySelector("#main_resource > a > img");

//   if (anchor && img) {
//     anchor.href = link; // Set the link to the entered URL
//     img.src = fileURL; // Set the image source to the uploaded file
//     configure_msg_bar("Feature Resource Updated!");
//   } else {
//     console.error("HTML elements for link or image are missing.");
//   }

//   // Optionally, clear the file input for a fresh upload
//   fileInput.value = "";
// });

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
          <td>
           ${
             mode === "edit" && doc.id !== auth.currentUser.email
               ? `<button onclick="deleteUser('${doc.id}')" class="button is-small is-danger is-outlined">Delete</button>
              `
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

auth.onAuthStateChanged((user) => {
  if (user) {
    document.querySelector(
      "#view_user"
    ).innerHTML = `&nbsp; user: ${user.email}`;
    login_button.classList.add("is-hidden");
    signup_button.classList.add("is-hidden");
    logout_button.classList.remove("is-hidden");

    admin_messages_modal.classList.add("is-hidden");

    db.collection("users")
      .doc(user.email)
      .get()
      .then((d) => {
        contact_button.classList.remove("is-hidden");
        quick_contact.classList.remove("is-hidden");
        let admin = d.exists ? d.data().admin : 0;

        if (admin == 1) {
          admin_view.forEach((a) => {
            a.classList.remove("is-hidden");
          });
          all_users("edit");
          if (contact_us.classList.contains("is-hidden") === false) {
            handleContactPageVisibility();
          }
        } else {
          admin_view.forEach((a) => {
            a.classList.add("is-hidden");
          });
          all_users("view");
        }
        show_announcements();
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        admin_messages_modal.classList.add("is-hidden");
      });
  } else {
    login_button.classList.remove("is-hidden");
    signup_button.classList.remove("is-hidden");
    logout_button.classList.add("is-hidden");
    document.querySelector("#view_user").innerHTML = "";

    admin_view.forEach((a) => {
      a.classList.add("is-hidden");
    });
    admin_messages_modal.classList.add("is-hidden");
    handleContactPageVisibility();
    show_announcements();
  }
});

// Contact page visibility and admin message handling
const handleContactPageVisibility = () => {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    contact_us.classList.add("is-hidden");
    admin_messages_modal.classList.add("is-hidden");
    contact_button.classList.add("is-hidden");
    quick_contact.classList.add("is-hidden");
    return;
  }

  if (
    contact_us.classList.contains("is-hidden") &&
    admin_messages_modal.classList.contains("is-hidden")
  ) {
    return;
  }

  // Check if user is admin
  db.collection("users")
    .doc(currentUser.email)
    .get()
    .then((doc) => {
      const isAdmin = doc.exists && doc.data().admin === 1;

      if (isAdmin) {
        // Admin user - hide contact form, show messages
        contact_us.classList.add("is-hidden");
        admin_messages_modal.classList.remove("is-hidden");
        loadAdminMessages();
      } else {
        // Regular user - show contact form, hide messages
        contact_us.classList.remove("is-hidden");
        contact_button.classList.remove("is-hidden");
        quick_contact.classList.remove("is-hidden");
        admin_messages_modal.classList.add("is-hidden");
      }
    })
    .catch((error) => {
      console.error("Error checking admin status:", error);
      // On error, show regular contact form
      contact_us.classList.remove("is-hidden");
      admin_messages_modal.classList.add("is-hidden");
    });
};

// Load and display messages for admin users
const loadAdminMessages = () => {
  db.collection("messages")
    .orderBy("timestamp", "desc") // Order by timestamp in descending order
    .get()
    .then((snapshot) => {
      let messagesHtml = "";

      if (snapshot.empty) {
        message_list.innerHTML =
          '<div class="box">No messages found.</div><div style="height: 120px"></div>';
        return;
      }

      snapshot.forEach((doc) => {
        const message = doc.data();

        // Format the timestamp if it exists
        const timestamp = message.timestamp
          ? new Date(message.timestamp).toLocaleString() // Converts ISO to readable date/time
          : "Timestamp not available";

        messagesHtml += `
          <div class="box">
            <h2 class="subtitle">Message Details</h2>
            <div class="content">
              <p><strong>Email:</strong> ${message.contact_email}</p>
              <p><strong>Subject:</strong> ${message.subject}</p>
              <p><strong>Message:</strong> ${message.message_body}</p>
              <p><strong>Timestamp:</strong> ${timestamp}</p> <!-- Add timestamp here -->
            </div>
            <div class="field">
              <label class="checkbox">
                <input type="checkbox" data-message-id="${
                  doc.id
                }" class="message-reply-checkbox" 
                  ${message.replied ? "checked" : ""}/> Mark as Replied
              </label>
            </div>
            <div class="field">
              <label class="label">Admin Comment</label>
              <div class="control">
                <textarea class="textarea" data-message-id="${doc.id}" 
                  placeholder="Add a comment...">${
                    message.adminComment || ""
                  }</textarea>
              </div>
            </div>
            <div class="buttons">
              <button class="button is-danger" onclick="deleteMessage('${
                doc.id
              }')">Delete</button>
              <button class="button is-link" onclick="saveMessageChanges('${
                doc.id
              }')">Save Changes</button>
            </div>
          </div>
        `;
      });

      message_list.innerHTML = messagesHtml;
    })
    .catch((error) => {
      console.error("Error loading messages:", error);
      message_list.innerHTML = '<div class="box">Error loading messages.</div>';
    });
};

// Delete message handler
const deleteMessage = (messageId) => {
  if (confirm("Are you sure you want to delete this message?")) {
    db.collection("messages")
      .doc(messageId)
      .delete()
      .then(() => {
        configure_msg_bar("Message deleted successfully!");
        loadAdminMessages(); // Reload messages
      })
      .catch((error) => {
        console.error("Error deleting message:", error);
        configure_msg_bar("Error deleting message", "error");
      });
  }
};

// Save message changes handler
const saveMessageChanges = (messageId) => {
  const checkbox = document.querySelector(
    `.message-reply-checkbox[data-message-id="${messageId}"]`
  );
  const textarea = document.querySelector(
    `textarea[data-message-id="${messageId}"]`
  );

  const updates = {
    replied: checkbox.checked,
    adminComment: textarea.value,
    lastUpdated: new Date(),
  };

  db.collection("messages")
    .doc(messageId)
    .update(updates)
    .then(() => {
      configure_msg_bar("Changes saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving changes:", error);
      configure_msg_bar("Error saving changes", "error");
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
  handleContactPageVisibility(); // Add this line
});
contact_button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll animation
  });
};

// Function to check if the user is an admin
function checkAdminStatus() {
  const DEBUG = false; // Set to true during development, false in production

  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      try {
        const userDoc = await db.collection("users").doc(user.email).get();
        if (userDoc.exists && userDoc.data().admin === 1) {
          DEBUG && console.log("Admin user detected, showing admin options.");
          document.querySelectorAll(".admin").forEach((el) => {
            el.classList.remove("is-hidden");
          });
        } else {
          DEBUG && console.log("User is not an admin.");
          hideAdminElements();
        }
      } catch (error) {
        DEBUG && console.error("Error checking admin status:", error);
        hideAdminElements();
      }
    } else {
      DEBUG && console.log("User is not logged in.");
      hideAdminElements(); // Hide admin elements when logged out
    }
  });
}

// Function to hide admin elements
function hideAdminElements() {
  document.querySelectorAll(".admin").forEach((el) => {
    el.classList.add("is-hidden");
  });
}

// Fetch officers from Firebase and render them dynamically
function showOfficers() {
  const officerContainer = document.querySelector("#officers_container");

  // Clear the current content in the container
  officerContainer.innerHTML = "";

  // Fetch officer data from Firebase
  db.collection("officers")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const officer = doc.data();

        // Create officer card HTML
        let officerCard = `
          <div class="column is-half-tablet is-one-third-desktop">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="${officer.photoURL}" alt="${officer.name} Headshot" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">${officer.name}</p>
                    <p class="subtitle is-6">${officer.title}</p>
                  </div>
                </div>
                <div class="content">
                  <p>Email: <a href="mailto:${officer.email}">${officer.email}</a></p>
                </div>
                <button class="button is-danger is-small delete-officer-btn admin is-hidden" data-officer-id="${doc.id}">
                  Delete
                </button>
              </div>
            </div>
          </div>
        `;

        // Append officer card to the container
        officerContainer.innerHTML += officerCard;
      });

      // Check if the logged-in user is an admin to reveal delete buttons if necessary
      checkAdminStatus();

      // Add event listeners for delete buttons if needed
      addDeleteOfficerListeners();
    })
    .catch((error) => {
      console.error("Error fetching officers:", error);
    });
}

// Call the function to render officers when the page loads
showOfficers();

function addDeleteOfficerListeners() {
  // Add event listeners to delete buttons
  const deleteButtons = document.querySelectorAll(".delete-officer-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const officerId = event.target.getAttribute("data-officer-id");
      deleteOfficer(officerId);
    });
  });
}

function deleteOfficer(officerId) {
  // Delete officer from Firebase Firestore
  db.collection("officers")
    .doc(officerId)
    .delete()
    .then(() => {
      configure_msg_bar("Officer deleted successfully!");
      showOfficers(); // Refresh the list of officers after deletion
    })
    .catch((error) => {
      console.error("Error deleting officer:", error);
    });
}

// officer creation form
document.addEventListener("DOMContentLoaded", function () {
  const officerForm = document.getElementById("officer_creation_form");

  officerForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const officerName = document.getElementById("officer_name").value.trim();
    const officerEmail = document.getElementById("officer_email").value.trim();
    const officerTitle = document.getElementById("officer_title").value.trim();
    const officerPhotoFile = document.getElementById("officer_photo").files[0];

    if (!officerPhotoFile) {
      configure_msg_bar("Please select a photo for the officer!", "error");
      return;
    }

    try {
      // Upload the officer photo to Firebase Storage
      const photoFileName = `officers/${new Date().toISOString()}_${
        officerPhotoFile.name
      }`;
      const photoRef = firebase.storage().ref().child(photoFileName);
      const photoSnapshot = await photoRef.put(officerPhotoFile);
      const photoURL = await photoSnapshot.ref.getDownloadURL();

      // Prepare officer object to be saved
      const officerData = {
        name: officerName,
        email: officerEmail,
        title: officerTitle,
        photoURL: photoURL,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      };

      // Save officer data to Firestore
      await db.collection("officers").add(officerData);

      configure_msg_bar("Officer added successfully!", "success");

      // Reset the form
      officerForm.reset();

      // Refresh officers list (optional)
      showOfficers();
    } catch (error) {
      console.error("Error adding officer:", error);
      configure_msg_bar("Error adding officer: " + error.message, "error");
    }
  });
});

function sendPasswordReset(email) {
  const signinModal = document.getElementById("signin_modal");

  if (!email) {
    // Close the modal and display the error message
    if (signinModal) {
      signinModal.classList.remove("is-active");
    }
    configure_msg_bar("Please enter your email address.", "error");
    return;
  }

  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      // Close the modal
      if (signinModal) {
        signinModal.classList.remove("is-active");
      }

      // Display success message
      configure_msg_bar("Password reset email sent!");
    })
    .catch((error) => {
      console.error("Error sending password reset email:", error);

      // Close the modal and display the error message
      if (signinModal) {
        signinModal.classList.remove("is-active");
      }
      configure_msg_bar(
        "Error sending password reset email: " + error.message,
        "error"
      );
    });
}

// Example usage
document.getElementById("reset_pwd").addEventListener("click", () => {
  const email = document.getElementById("signin_email").value;
  sendPasswordReset(email.trim());
});
