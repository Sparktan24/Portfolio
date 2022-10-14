const menuButton = document.querySelector('#menu');
const menuContainer = document.querySelector('.menu-container');
const closeButton = document.querySelector('#close-btn');
const menuElements = document.querySelectorAll('.menu-button');

menuButton.addEventListener('click', () => {
  menuContainer.classList.remove('display-none');
});

closeButton.addEventListener('click', () => {
  menuContainer.classList.add('display-none');
});

menuElements.forEach((item) => {
  item.addEventListener('click', () => {
    menuContainer.classList.add('display-none');
  });
});

const projects = [
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    featuredImage: 'Placeholder1.svg',
    technologies: ['CSS', 'html', 'javascript'],
    liveLink: 'https://sparktan24.github.io/Portfolio/',
    sourceLink: 'https://github.com/Sparktan24/Portfolio',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'ProjectImg.jpg',
    technologies: ['CSS', 'html', 'javascript'],
    liveLink: 'https://sparktan24.github.io/Portfolio/',
    sourceLink: 'https://github.com/Sparktan24/Portfolio',
  },
  {
    name: 'DataDashboard',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'ProjectImg.jpg',
    technologies: ['CSS', 'html', 'javascript'],
    liveLink: 'https://sparktan24.github.io/Portfolio/',
    sourceLink: 'https://github.com/Sparktan24/Portfolio',
  },
  {
    name: 'Website',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'ProjectImg.jpg',
    technologies: ['CSS', 'html', 'javascript'],
    liveLink: 'https://sparktan24.github.io/Portfolio/',
    sourceLink: 'https://github.com/Sparktan24/Portfolio',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'ProjectImg.jpg',
    technologies: ['CSS', 'html', 'javascript'],
    liveLink: 'https://sparktan24.github.io/Portfolio/',
    sourceLink: 'https://github.com/Sparktan24/Portfolio',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'ProjectImg.jpg',
    technologies: ['CSS', 'html', 'javascript'],
    liveLink: 'https://sparktan24.github.io/Portfolio/',
    sourceLink: 'https://github.com/Sparktan24/Portfolio',
  },
  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'ProjectImg.jpg',
    technologies: ['CSS', 'html', 'javascript'],
    liveLink: 'https://sparktan24.github.io/Portfolio/',
    sourceLink: 'https://github.com/Sparktan24/Portfolio',
  },
];

const portfolioContainer = document.getElementById('portfolioWrapper');

projects.forEach((project, index) => {
  const card = document.createElement('card');
  let addElements = '';

  if (index === 0) {
    card.classList.add('grid-item1');
    addElements += `
    <div class="featured-work">
    <img id='featured-img' src="resources/images/${project.featuredImage}" />
    <div class="right-block">
    <h2 id='featured-title' class="title-featured">${project.name}</h2>
    <p class="featured-content">
    ${project.description}
    </p>
    <div class="featured-tags">
      <ul>`;
    project.technologies.forEach((element) => {
      addElements += `<li>${element}</li>`;
    });
    addElements += `
      </ul>
    </div>
    <button class="featured-btn">See Project</button>
  </div>
  </div>`;
  } else {
    card.classList.add('work-post');
    addElements += `
    <div class="work-post">
    <h3 class="title-work">${project.name}</h3>
    <p class="work-content">${project.description}</p>
    <div class="work-tags">
      <ul>`;
    project.technologies.forEach((element) => {
      addElements += `<li>${element}</li>`;
    });
    addElements += `
      </ul>
    </div>
    <button class="work-btn" id='work-btn-index-${index}'>See Project</button>
  </div>`;
  }
  card.innerHTML = addElements;
  portfolioContainer.appendChild(card);
});

let addElements = '';

const seeProjectButton = document.querySelector('.featured-btn');
const popupContainer = document.getElementById('popup-container');
const divPopTitle = document.querySelector('#popTitle');

const wrapper = document.querySelector('.wrapper');

seeProjectButton.addEventListener('click', () => {
  const title = popupContainer.querySelector('#featured-title');
  title.textContent = projects[0].name;
  const image = popupContainer.querySelector('#featured-img');
  image.src = `resources/images/${projects[0].featuredImage}`;
  popupContainer.classList.toggle('display-none');
  wrapper.classList.toggle('blur');
});

const divTitleTags = document.createElement('div');
divTitleTags.style.display = 'flex';
divTitleTags.style.flexDirection = 'column';
divTitleTags.style.gap = '24px';

projects.forEach((project, index) => {
  addElements += `
  <div class='flexy'>
  <h2 id='featured-title' class="title-featured">${project.name}</h2>
  <button id="close-btn-pop">&#10799;</button>
  </div>`;
  if (index === 0) {
    addElements += `
      <div class="featured-tags">
      <ul>`;
    project.technologies.forEach((element) => {
      addElements += `<li>${element}</li>`;
    });
    addElements += `
      </ul>`;

    addElements += `
    </div>
    <div class='format'>
    <img id='featured-img' src="resources/images/${project.featuredImage}" />
    <div class='flexy-buttons column'>
      <p class="featured-content">
      ${project.description}
      </p>
      <div class='div-pop-buttons'>
      <button class="featured-btn pop"><a href='${project.liveLink}'>See Live <img src="resources/images/popup-window/IconLivePopButton.svg"></a></button>
      <button class="featured-btn pop"><a href='${project.sourceLink}'>See Source <img src="resources/images/popup-window/Icon-see-source.popup.svg"></a></button>
      </div>
    </div>
    </div>`;

    divTitleTags.innerHTML = addElements;
    divPopTitle.appendChild(divTitleTags);
  }
});

const seeProjectButtonWork = document.querySelectorAll('.work-btn');
seeProjectButtonWork.forEach((button) => {
  button.addEventListener('click', (e) => {
    const { id } = e.target;
    const index = id.replace('work-btn-index-', '');
    const title = popupContainer.querySelector('#featured-title');
    title.textContent = projects[index].name;
    const image = popupContainer.querySelector('#featured-img');
    image.src = `resources/images/${projects[index].featuredImage}`;
    popupContainer.classList.toggle('display-none');
    wrapper.classList.toggle('blur');
  });
});

const closeButtonPop = document.querySelector('#close-btn-pop');
closeButtonPop.addEventListener('click', () => {
  popupContainer.classList.add('display-none');
  wrapper.classList.toggle('blur');
});

const form = document.querySelector('form');
const email = document.getElementById('mail');
const emailError = document.querySelector('.error');
function toUpperCaseValidation(str) {
  let regEx = /[A-Z]/;
  let isMatch = regEx.test(str);
  return isMatch;
}
function showError() {
  let regEx = /[A-Z]/;
  let isMatch = toUpperCaseValidation(email.value);
  let result = isMatch ? 'Email should be lowercase' : '';
  emailError.textContent = result;
  emailError.className = "error active";
}

email.addEventListener("input", (event) => {
  if (email.validity.valid && !toUpperCaseValidation(email.value)) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});
form.addEventListener('submit', (event) => {
  if (!email.validity.valid || toUpperCaseValidation(email.value)) {
    showError();
    event.preventDefault();
  }
});
