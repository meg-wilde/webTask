//function to add a new review when the form is filled in
document.addEventListener("DOMContentLoaded", function () {
  const testimonialContainer = document.getElementById("testimonial-container");
  const submitButton = document.querySelector("#submit button");

  //load existing testimonials from session storage
  if (sessionStorage.getItem("testimonials")) {
    testimonialContainer.innerHTML = sessionStorage.getItem("testimonials");
  }

  submitButton.addEventListener("click", function (event) {
    //listen to the submit button
    event.preventDefault();

    const nameInput = document.getElementById("name").value; //create name variable and save input to it
    const reviewInput = document.getElementById("review").value; //create review variable and save input to it.

    // Create a new testimonial element
    const newTestimonial = document.createElement("div");
    newTestimonial.classList.add("testimonial");
    newTestimonial.innerHTML = `
        <p>"${reviewInput}"</p>
        <p class="author">- ${nameInput}</p>
      `;

    // Append the new testimonial to the testimonial container
    testimonialContainer.appendChild(newTestimonial);

    //save to session storage
    sessionStorage.setItem("testimonials", testimonialContainer.innerHTML);

    // Reset the form
    document.getElementById("name").value = "";
    document.getElementById("review").value = "";
  });
});
