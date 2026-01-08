import gsap from "gsap";

const TRACES_DATA = [
  {
    name: "Mini Marvels Expo",
    img: "/event-images/mini-marvels-expo.webp",
    tag: "TBA • Innovation Event",
    link: "/events-pages/mini-marvels-expo",
  },
  {
    name: "Vision On Paper",
    img: "/event-images/vision-on-paper.webp",
    tag: "TBA • Technical Event",
    link: "/events-pages/vision-on-paper",
  },
  {
    name: "Design X Arena",
    img: "/event-images/design-x-arena.webp",
    tag: "TBA • Design Event",
    link: "/events-pages/design-x-arena",
  },
  {
    name: "Pixel Quest",
    img: "/event-images/pixel-quest.webp",
    tag: "TBA • Gaming Event",
    link: "/events-pages/pixel-quest",
  },
  {
    name: "Tech Jam",
    img: "/event-images/tech-jam.webp",
    tag: "TBA • Technical Event",
    link: "/events-pages/tech-jam",
  },
  {
    name: "Tech Treasure Hunt",
    img: "/event-images/tech-treasure-hunt.webp",
    tag: "TBA • Fun Event",
    link: "/events-pages/tech-treasure-hunt",
  },
  {
    name: "Brain Byte Quiz",
    img: "/event-images/brain-byte-quiz.webp",
    tag: "TBA • Quiz Event",
    link: "/events-pages/brain-byte-quiz",
  },
  {
    name: "Tech Talk Battle",
    img: "/event-images/tech-talk-battle.webp",
    tag: "TBA • Technical Event",
    link: "/events-pages/tech-talk-battle",
  },
  {
    name: "Digital Canvas",
    img: "/event-images/digital-canvas.webp",
    tag: "TBA • Design Event",
    link: "/events-pages/digital-canvas",
  },
  {
    name: "Codesprint",
    img: "/event-images/codesprint.webp",
    tag: "TBA • Coding Event",
    link: "/events-pages/codesprint",
  },
  {
    name: "Battle Zone Gaming",
    img: "/event-images/battle-zone-gaming.webp",
    tag: "TBA • Gaming Event",
    link: "/events-pages/battle-zone-gaming",
  },
  {
    name: "Bioinformatics Quest",
    img: "/event-images/bioinformatics.quest.webp",
    tag: "TBA • Technical Event",
    link: "/events-pages/bioinformatics-quest",
  },
  {
    name: "Waste 2 Best",
    img: "/event-images/waste-2-best.webp",
    tag: "TBA • Innovation Event",
    link: "/events-pages/waste-2-best",
  },
  {
    name: "Future Tech Pitch",
    img: "/event-images/future-tech-pitch.webp",
    tag: "TBA • Innovation Event",
    link: "/events-pages/future-tech-pitch",
  },
  {
    name: "Electrocraft",
    img: "/event-images/electrocraft.webp",
    tag: "TBA • Technical Event",
    link: "/events-pages/electrocraft",
  },
  {
    name: "Silicon Spark",
    img: "/event-images/silicon-spark.webp",
    tag: "TBA • Technical Event",
    link: "/events-pages/silicon-spark",
  },
  {
    name: "Bio Innovation Pitch",
    img: "/event-images/bio-innovation-pitch.webp",
    tag: "TBA • Innovation Event",
    link: "/events-pages/bio-innovation-pitch",
  },
  {
    name: "Science Sprint",
    img: "/event-images/science-sprint.webp",
    tag: "TBA • Science Event",
    link: "/events-pages/science-sprint",
  },
  {
    name: "Quantum Challenge",
    img: "/event-images/quantum-challenge.webp",
    tag: "TBA • Science Event",
    link: "/events-pages/quantum-challenge",
  },
  {
    name: "Sky Racers",
    img: "/event-images/sky-racers.webp",
    tag: "TBA • Robotics Event",
    link: "/events-pages/sky-racers",
  },
  {
    name: "Robo Dash",
    img: "/event-images/robo-dash.webp",
    tag: "TBA • Robotics Event",
    link: "/events-pages/robo-dash",
  },
  {
    name: "VR Fight Zone",
    img: "/event-images/vr-fight-zone.webp",
    tag: "TBA • Gaming Event",
    link: "/events-pages/vr-fight-zone",
  },
  {
    name: "Web Wizards",
    img: "/event-images/web-wizards.webp",
    tag: "TBA • Coding Event",
    link: "/events-pages/web-wizards",
  },
  {
    name: "Ideathon",
    img: "/event-images/ideathon.webp",
    tag: "TBA • Innovation Event",
    link: "/events-pages/ideathon",
  },
  {
    name: "Coding Knockout",
    img: "/event-images/coding-knockout.webp",
    tag: "TBA • Coding Event",
    link: "/events-pages/coding-knockout",
  },
  {
    name: "Fail Forward",
    img: "/event-images/fail-forward.webp",
    tag: "TBA • Innovation Event",
    link: "/events-pages/fail-forward",
  },
  {
    name: "Forensic Files",
    img: "/event-images/forensic-files.webp",
    tag: "TBA • Technical Event",
    link: "/events-pages/forensic-files",
  },
  {
    name: "Mind Vault",
    img: "/event-images/mind-vault.webp",
    tag: "TBA • Quiz Event",
    link: "/events-pages/mind-vault",
  },
  {
    name: "Science Escape Room",
    img: "/event-images/science-escape-room.webp",
    tag: "TBA • Science Event",
    link: "/events-pages/science-escape-room",
  },
  {
    name: "Think Tank GD",
    img: "/event-images/think-tank-gd.webp",
    tag: "TBA • Discussion Event",
    link: "/events-pages/think-tank-gd",
  },
  {
    name: "Space Tech Quiz",
    img: "/event-images/space-tech-quiz.webp",
    tag: "TBA • Quiz Event",
    link: "/events-pages/space-tech-quiz",
  },
  {
    name: "Smart City Design Challenge",
    img: "/event-images/smart-city-design-challenge.webp",
    tag: "TBA • Innovation Event",
    link: "/events-pages/smart-city-design-challenge",
  },
  {
    name: "Tech Meme War",
    img: "/event-images/tech-meme-war.webp",
    tag: "TBA • Fun Event",
    link: "/events-pages/tech-meme-war",
  },
  {
    name: "AI Prompt Engineering Challenge",
    img: "/event-images/ai-prompt-engineering-challenge.webp",
    tag: "TBA • AI Event",
    link: "/events-pages/ai-prompt-engineering-challenge",
  },
  {
    name: "One Slide Pitch",
    img: "/event-images/one-slide-pitch.webp",
    tag: "TBA • Innovation Event",
    link: "/events-pages/one-slide-pitch",
  },
  {
    name: "Emoji Coding",
    img: "/event-images/emoji-coding.webp",
    tag: "TBA • Coding Event",
    link: "/events-pages/emoji-coding",
  },
  {
    name: "Mystery Box Challenge",
    img: "/event-images/mystery-box-challenge.webp",
    tag: "TBA • Fun Event",
    link: "/events-pages/mystery-box-challenge",
  },
  {
    name: "College To Corporate",
    img: "/event-images/college-to-coporate.webp",
    tag: "TBA • Career Event",
    link: "/events-pages/college-to-corporate",
  },
  {
    name: "Robo Dash",
    img: "/event-images/robo-dash.webp",
    tag: "TBA • Robotics Event",
    link: "/events-pages/robo-race",
  },
];


const SPACING = 0.4;
const SLIDE_WIDTH = SPACING * 1000;

let currentProductIndex = 0;
let slideItems = [];
let isPreviewAnimating = false;
let isPreviewOpen = false;
let BUFFER_SIZE = 3;

document.addEventListener("DOMContentLoaded", () => {
  initTracesSlider();
  initTracesAnimations();
});

// traces section - slider and preview initialization
function initTracesSlider() {
  const tracesContainer = document.querySelector(".traces");
  const traceName = document.querySelector(".trace-name p");
  const tracePreview = document.querySelector(".traces-preview");
  const tracePreviewName = document.querySelector(".traces-preview-name h3");
  const tracePreviewImg = document.querySelector(".traces-preview-img img");
  const tracePreviewTag = document.querySelector(".traces-preview-tag p");
  const controllerInner = document.querySelector(".controller-inner");
  const controllerOuter = document.querySelector(".controller-outer");
  const traceControllerCloseIconSpan = document.querySelectorAll(
    ".controller-close-icon span"
  );
  const traceControllerPrevBtn = document.querySelector(
    ".traces-controller-nav-btn.prev"
  );
  const traceControllerNextBtn = document.querySelector(
    ".traces-controller-nav-btn.next"
  );

  // Event title display elements
  const eventTitle = document.querySelector(".event-title");
  const eventTag = document.querySelector(".event-tag");

  if (
    !tracesContainer ||
    !traceName ||
    !tracePreview ||
    !tracePreviewName ||
    !tracePreviewImg ||
    !tracePreviewTag ||
    !controllerInner ||
    !controllerOuter ||
    !traceControllerPrevBtn ||
    !traceControllerNextBtn
  ) {
    return;
  }

  // Event title display container
  const eventTitleDisplay = document.querySelector(".event-title-display");

  // Function to update event title with animation
  function updateEventTitle() {
    const actualIndex =
      ((currentProductIndex % TRACES_DATA.length) + TRACES_DATA.length) %
      TRACES_DATA.length;
    const currentProduct = TRACES_DATA[actualIndex];

    // Remove visible class for fade out
    if (eventTitle) eventTitle.classList.remove("visible");
    if (eventTag) eventTag.classList.remove("visible");

    // Update text after brief delay, then fade in
    setTimeout(() => {
      if (eventTitle) {
        eventTitle.textContent = currentProduct.name;
        eventTitle.classList.add("visible");
      }
      if (eventTag) {
        eventTag.textContent = currentProduct.tag;
        eventTag.classList.add("visible");
      }
    }, 150);
  }

  // Function to show/hide event title display
  function toggleEventTitleDisplay(hide) {
    if (eventTitleDisplay) {
      if (hide) {
        eventTitleDisplay.classList.add("hidden");
      } else {
        eventTitleDisplay.classList.remove("hidden");
      }
    }
  }

  function getBufferSize() {
    return window.innerWidth < 1000 ? 1 : 3;
  }

  function addSlideItem(relativeIndex) {
    const productIndex =
      (((currentProductIndex + relativeIndex) % TRACES_DATA.length) +
        TRACES_DATA.length) %
      TRACES_DATA.length;
    const product = TRACES_DATA[productIndex];

    const li = document.createElement("li");
    li.innerHTML = `<div class="product-item-bg-wrapper"><div class="product-item-bg"></div></div><div class="outline-wrapper"><div class="product-bg-outline"></div></div><div class="product-img-wrapper"><img src="${product.img}" alt="${product.name}" /></div>`;
    li.dataset.relativeIndex = relativeIndex;
    li.dataset.productIndex = productIndex;

    // Add click functionality for navigation
    if (product.link) {
      li.style.cursor = "pointer";
      li.addEventListener("click", (e) => {
        // Only navigate if this is the active (center) card
        if (parseInt(li.dataset.relativeIndex) === 0) {
          window.location.href = product.link;
        }
      });
    }

    gsap.set(li, {
      x: relativeIndex * SLIDE_WIDTH,
      scale: 0,
      zIndex: relativeIndex === 0 ? 100 : 1,
      force3D: true,
    });

    tracesContainer.appendChild(li);
    slideItems.push({ element: li, relativeIndex: relativeIndex });
  }

  function removeSlideItem(relativeIndex) {
    const itemIndex = slideItems.findIndex(
      (item) => item.relativeIndex === relativeIndex
    );
    if (itemIndex !== -1) {
      const item = slideItems[itemIndex];
      item.element.remove();
      slideItems.splice(itemIndex, 1);
    }
  }

  function updateSliderPosition() {
    const tl = gsap.timeline();

    slideItems.forEach((item) => {
      const isActive = item.relativeIndex === 0;
      tl.to(
        item.element,
        {
          x: item.relativeIndex * SLIDE_WIDTH,
          scale: isActive ? 1.1 : 0.75,
          zIndex: isActive ? 100 : 1,
          duration: 0.75,
          ease: "power3.out",
          force3D: true,
        },
        0
      );
    });
  }

  function updatetraceName() {
    const actualIndex =
      ((currentProductIndex % TRACES_DATA.length) + TRACES_DATA.length) %
      TRACES_DATA.length;
    traceName.textContent = TRACES_DATA[actualIndex].name;
  }

  function updatePreviewContent() {
    const actualIndex =
      ((currentProductIndex % TRACES_DATA.length) + TRACES_DATA.length) %
      TRACES_DATA.length;
    const currentProduct = TRACES_DATA[actualIndex];
    tracePreviewName.textContent = currentProduct.name;
    tracePreviewImg.src = currentProduct.img;
    tracePreviewImg.alt = currentProduct.name;
    tracePreviewTag.textContent = currentProduct.tag;
  }

  function moveNext() {
    if (isPreviewAnimating || isPreviewOpen) return;

    currentProductIndex++;
    removeSlideItem(-BUFFER_SIZE);
    slideItems.forEach((item) => {
      item.relativeIndex--;
      item.element.dataset.relativeIndex = item.relativeIndex;
    });
    addSlideItem(BUFFER_SIZE);
    updateSliderPosition();
    updatetraceName();
    updatePreviewContent();
    updateEventTitle();
  }

  function movePrev() {
    if (isPreviewAnimating || isPreviewOpen) return;

    currentProductIndex--;
    removeSlideItem(BUFFER_SIZE);
    slideItems.forEach((item) => {
      item.relativeIndex++;
      item.element.dataset.relativeIndex = item.relativeIndex;
    });
    addSlideItem(-BUFFER_SIZE);
    updateSliderPosition();
    updatetraceName();
    updatePreviewContent();
    updateEventTitle();
  }

  function updateButtonStates() {
    if (isPreviewAnimating || isPreviewOpen) {
      traceControllerPrevBtn.classList.add("disabled");
      traceControllerNextBtn.classList.add("disabled");
    } else {
      traceControllerPrevBtn.classList.remove("disabled");
      traceControllerNextBtn.classList.remove("disabled");
    }
  }

  function getActiveSlide() {
    return slideItems.find((item) => item.relativeIndex === 0);
  }

  function animateSideItems(hide = false) {
    const activeSlide = getActiveSlide();

    slideItems.forEach((item) => {
      const absIndex = Math.abs(item.relativeIndex);
      if (absIndex === 1 || absIndex === 2) {
        gsap.to(item.element, {
          x: hide
            ? item.relativeIndex * SLIDE_WIDTH * 1.5
            : item.relativeIndex * SLIDE_WIDTH,
          opacity: hide ? 0 : 1,
          duration: 0.75,
          ease: "power3.inOut",
          force3D: true,
        });
      }
    });

    if (activeSlide) {
      gsap.to(activeSlide.element, {
        scale: hide ? 0.75 : 1.1,
        opacity: hide ? 0 : 1,
        duration: 0.75,
        ease: "power3.inOut",
        force3D: true,
      });
    }
  }

  function animateControllerTransition(opening = false) {
    const navEls = [".controller-label p", ".traces-controller-nav-btn"];

    gsap.to(navEls, {
      opacity: opening ? 0 : 1,
      duration: 0.2,
      ease: "power3.out",
      delay: opening ? 0 : 0.4,
    });

    gsap.to(controllerOuter, {
      clipPath: opening ? "circle(0% at 50% 50%)" : "circle(50% at 50% 50%)",
      duration: 0.75,
      ease: "power3.inOut",
    });

    gsap.to(controllerInner, {
      clipPath: opening ? "circle(50% at 50% 50%)" : "circle(40% at 50% 50%)",
      duration: 0.75,
      ease: "power3.inOut",
    });

    gsap.to(traceControllerCloseIconSpan, {
      width: opening ? "20px" : "0px",
      duration: opening ? 0.4 : 0.3,
      ease: opening ? "power3.out" : "power3.in",
      stagger: opening ? 0.1 : 0.05,
      delay: opening ? 0.2 : 0,
    });
  }

  function togglePreview() {
    if (isPreviewAnimating) return;

    isPreviewAnimating = true;
    updateButtonStates();

    if (!isPreviewOpen) updatePreviewContent();

    // Hide event title when opening preview
    toggleEventTitleDisplay(!isPreviewOpen);

    gsap.to(tracePreview, {
      y: isPreviewOpen ? "100%" : "-50%",
      duration: 0.75,
      ease: "power3.inOut",
    });

    animateSideItems(!isPreviewOpen);
    animateControllerTransition(!isPreviewOpen);

    setTimeout(() => {
      isPreviewAnimating = false;
      isPreviewOpen = !isPreviewOpen;
      updateButtonStates();
    }, 600);
  }

  function clearSlider() {
    slideItems.forEach((item) => {
      item.element.remove();
    });
    slideItems = [];
  }

  function rebuildSlider() {
    clearSlider();
    BUFFER_SIZE = getBufferSize();
    for (let i = -BUFFER_SIZE; i <= BUFFER_SIZE; i++) {
      addSlideItem(i);
    }
    updateSliderPosition();
    updatetraceName();
    updatePreviewContent();
    updateButtonStates();
  }

  function initializeSlider() {
    BUFFER_SIZE = getBufferSize();
    for (let i = -BUFFER_SIZE; i <= BUFFER_SIZE; i++) {
      addSlideItem(i);
    }

    slideItems.forEach((item) => {
      const isActive = item.relativeIndex === 0;
      gsap.set(item.element, {
        x: item.relativeIndex * SLIDE_WIDTH,
        zIndex: isActive ? 100 : 1,
      });
    });

    slideItems.forEach((item) => {
      const isActive = item.relativeIndex === 0;
      gsap.to(item.element, {
        scale: isActive ? 1.1 : 0.75,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
    });

    updatetraceName();
    updatePreviewContent();
    updateButtonStates();

    // Initial title display with delay for entrance animation
    setTimeout(() => {
      updateEventTitle();
    }, 600);
  }

  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const newBufferSize = getBufferSize();
      if (newBufferSize !== BUFFER_SIZE) {
        rebuildSlider();
      }
    }, 150);
  }

  let resizeTimeout;
  traceControllerPrevBtn.addEventListener("click", movePrev);
  traceControllerNextBtn.addEventListener("click", moveNext);
  controllerInner.addEventListener("click", togglePreview);
  window.addEventListener("resize", handleResize);

  initializeSlider();
}

// traces section - slide in animations for nav, footer, and controller
function initTracesAnimations() {
  const tracesNav = document.querySelector(".traces-nav");
  const tracesFooter = document.querySelector(".traces-footer");
  const controller = document.querySelector(".traces-slider .controller");

  if (tracesNav) {
    gsap.set(tracesNav, { y: -100 });
    gsap.to(tracesNav, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
  }

  if (tracesFooter) {
    gsap.set(tracesFooter, { y: 100 });
    gsap.to(tracesFooter, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
  }

  if (controller) {
    gsap.set(controller, { y: 300 });
    gsap.to(controller, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
  }
}
