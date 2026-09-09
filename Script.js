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

