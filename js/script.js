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

  const home = document.querySelector(".home");
  const plans = document.querySelector(".plans");
  const stuff = document.querySelector(".stuff");
  const profile = document.querySelector(".profile");

  home.addEventListener('click', function () {
    window.location.href = "index.html";
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

  const searchToggle = document.querySelector(".toggle");
  const searchInput = document.querySelector(".search-input");
  const coursesList = document.querySelector(".courses")
  const coursesCord = document.querySelectorAll(".cord")

  searchToggle.addEventListener('click', function () {
    searchInput.classList.toggle("active");
  });

  searchInput.addEventListener('keyup', function () {
    const filter = searchInput.value.toLowerCase();

    for (let i = 0; i < coursesCord.length; i++) {
      
      const courseName = coursesCord[i].textContent.toLowerCase();

      if (courseName.includes(filter)) {
    
        coursesCord[i].style.display = ''
    
      } else {

        coursesCord[i].style.display = 'none'
        
      }

    }

  });

  const more = document.querySelectorAll(".more");

  more.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault(); 
      window.location.href = "info.html"; 
    });
  });


