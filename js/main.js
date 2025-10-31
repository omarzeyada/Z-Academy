
  const searchToggle = document.querySelector(".toggle");
  const searchInput = document.querySelector(".search-input");
  const loginButton = document.querySelector(".login-button");
  const login = document.querySelector(".login");
  const close = document.querySelector(".close");
  const checkButton = document.querySelector(".check-button");
  const check = document.querySelector(".check");
  const email = document.querySelector(".email");
  const pass = document.querySelector(".password");
  const form = document.querySelector(".form");
  const errorMsg = document.querySelector(".error-msg");

  searchToggle.addEventListener('click', function () {
    searchInput.classList.toggle("active");
  });
  loginButton.addEventListener('click', function () {
    login.style.display = 'block';
  });
  close.addEventListener('click', function () {
    login.style.display = 'none';
  });

  checkButton.addEventListener('click', function () {
    if (email.value.trim() === '') {
      errorMsg.style.display = 'block';
    }
     else if (pass.value.trim() === '') {
      errorMsg.style.display = 'block';
    } 
    else {
      form.style.display = 'none';
      check.style.display = 'block';
    }
  });

  const moreCourses = document.querySelector(".more-courses");
  const more = document.querySelectorAll(".more");

  moreCourses.addEventListener('click', function (event) {
      event.preventDefault(); 
    window.location.href = "courses.html"; 
  });
  more.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); 
      window.location.href = "info.html"; 
    });
  });


  const setToggle = document.querySelector(".toggle-settings");
  const setBox = document.querySelector(".settings-box");

  setToggle.addEventListener('click', function () {

    document.querySelector(".toggle-settings .icon").classList.toggle("fa-spin");
    setBox.classList.toggle("open");

  });

  const optionBox = document.querySelectorAll(".option-box");

  optionBox.forEach(option => {
    option.addEventListener('click', function () {

      const currentActive = document.querySelector(".option-box.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }
      this.classList.add("active");
    });
  });

  const courses = document.querySelector(".courses-page");
  const plans = document.querySelector(".plans");
  const stuff = document.querySelector(".stuff");
  const profile = document.querySelector(".profile");

  courses.addEventListener('click', function () {
    window.location.href = "courses.html";
  });
  plans.addEventListener('click', function () {
    window.location.href = "plans.html";
  });
  stuff.addEventListener('click', function () {
    window.location.href = "stuff.html";
  });
  profile.addEventListener('click', function () {
    window.location.href = "profile.html";
  });
