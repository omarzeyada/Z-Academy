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
  const home = document.querySelector(".home");
  const profile = document.querySelector(".profile");

  courses.addEventListener('click', function () {
    window.location.href = "courses.html";
  });
  plans.addEventListener('click', function () {
    window.location.href = "plans.html";
  });
  home.addEventListener('click', function () {
    window.location.href = "index.html";
  });
  profile.addEventListener('click', function () {
    window.location.href = "profile.html";
  });

