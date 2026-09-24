const menu = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

menu.addEventListener("click", () => {

menu.classList.toggle("active");
nav.classList.toggle("active");

});


document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");

  if (logo) {
    logo.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
});


/* For smooth nav animation in Members section*/

window.addEventListener("load", () => {
document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const teamCards = document.querySelectorAll(".team-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;

            // Remove active state from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Add active state to clicked button
            button.classList.add("active");

            // Filter cards
            teamCards.forEach(card => {

                const categories = card.dataset.category.split(" ");

                if (
                    filter === "all" ||
                    categories.includes(filter)
                ) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }

            });

        });

    });


});

/* ==================================================
   OPnix — Service Suggestions / Solution Finder
   Handles expandable service recommendation cards
================================================== */
document.querySelectorAll(".suggestion-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".suggestion-card");

    // Close other cards
    document.querySelectorAll(".suggestion-card").forEach((item) => {
      if (item !== card) {
        item.classList.remove("active");
      }
    });

    // Toggle clicked card
    card.classList.toggle("active");
  });
});


/* ==================================================
   OPNIX — SERVICES FILTER
================================================== */

const serviceTabs = document.querySelectorAll(".service-tab");
const serviceCards = document.querySelectorAll(".service-card");

serviceTabs.forEach(tab => {

  tab.addEventListener("click", () => {

    const category = tab.dataset.category;

    // Active tab
    serviceTabs.forEach(item => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    // Filter cards
    serviceCards.forEach(card => {

      if (
        category === "all" ||
        card.dataset.category === category
      ) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }

    });

  });

});