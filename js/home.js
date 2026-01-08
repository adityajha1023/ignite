import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

document.addEventListener("DOMContentLoaded", () => {
  initHeroTimer();
  initIntroCopyAnimation();
  initStickyWorkHeaderAnimation();
  initTeamAnimations();
});

// hero section - updates timezone display every minute
function initHeroTimer() {
  const timeElement = document.querySelector(".hero-timer p");
  if (!timeElement) return;

  function updateTime() {
    const options = {
      timeZone: "Asia/Kolkata",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    };


    const torontoTime = new Date().toLocaleString("en-US", options);
    const hour = parseInt(torontoTime.split(":")[0]);
    const sector = Math.floor(hour / 4) + 1;
    const sectorFormatted = String(sector).padStart(2, "0");

    timeElement.textContent = `Zone ${sectorFormatted} __ ${torontoTime}`;
  }

  updateTime();
  setInterval(updateTime, 60000);
}

// intro section - text fill animation on scroll
function initIntroCopyAnimation() {
  const introCopyH3 = document.querySelector(".intro-copy h3");
  if (!introCopyH3) return;

  const split = SplitText.create(introCopyH3, {
    type: "words, chars",
    charsClass: "char",
  });

  ScrollTrigger.create({
    trigger: ".intro-copy",
    start: "top 75%",
    end: "bottom 30%",
    onUpdate: (self) => {
      const progress = self.progress;
      const totalChars = split.chars.length;
      const charsToColor = Math.floor(progress * totalChars);

      split.chars.forEach((char, index) => {
        if (index < charsToColor) {
          char.style.color = "var(--base-100)";
        } else {
          char.style.color = "var(--base-300)";
        }
      });
    },
  });
}

// featured missions header section - pins header while missions section scrolls
function initStickyWorkHeaderAnimation() {
  const workHeaderSection = document.querySelector(".featured-missions-header");
  const homeWorkSection = document.querySelector(".featured-missions");

  if (!workHeaderSection || !homeWorkSection) return;

  ScrollTrigger.create({
    trigger: workHeaderSection,
    start: "top top",
    endTrigger: homeWorkSection,
    end: "bottom bottom",
    pin: true,
    pinSpacing: false,
  });
}

export { initHeroTimer };
// team section - animated team member cards
function initTeamAnimations() {
  const teamSection = document.querySelector(".team-section");
  const teamMembers = gsap.utils.toArray(".team-member");
  const teamMemberCards = gsap.utils.toArray(".team-member-card");

  if (!teamSection || teamMembers.length === 0) return;

  let cardPlaceholderEntrance = null;
  let cardSlideInAnimation = null;

  function setupTeamAnimations() {
    if (window.innerWidth < 1000) {
      if (cardPlaceholderEntrance) cardPlaceholderEntrance.kill();
      if (cardSlideInAnimation) cardSlideInAnimation.kill();

      teamMembers.forEach((member) => {
        gsap.set(member, { clearProps: "all" });
        const teamMemberInitial = member.querySelector(".team-member-name-initial h1");
        gsap.set(teamMemberInitial, { clearProps: "all" });
      });

      teamMemberCards.forEach((card) => {
        gsap.set(card, { clearProps: "all" });
      });

      return;
    }

    if (cardPlaceholderEntrance) cardPlaceholderEntrance.kill();
    if (cardSlideInAnimation) cardSlideInAnimation.kill();

    cardPlaceholderEntrance = ScrollTrigger.create({
      trigger: teamSection,
      start: "top bottom",
      end: "top top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        teamMembers.forEach((member, index) => {
          const entranceDelay = 0.15;
          const entranceDuration = 0.7;
          const entranceStart = index * entranceDelay;
          const entranceEnd = entranceStart + entranceDuration;

          if (progress >= entranceStart && progress <= entranceEnd) {
            const memberEntranceProgress = (progress - entranceStart) / entranceDuration;
            const entranceY = 125 - memberEntranceProgress * 125;
            gsap.set(member, { y: `${entranceY}%` });

            const teamMemberInitial = member.querySelector(".team-member-name-initial h1");
            const initialLetterScaleDelay = 0.4;
            const initialLetterScaleProgress = Math.max(
              0,
              (memberEntranceProgress - initialLetterScaleDelay) / (1 - initialLetterScaleDelay)
            );
            gsap.set(teamMemberInitial, { scale: initialLetterScaleProgress });
          } else if (progress > entranceEnd) {
            gsap.set(member, { y: `0%` });
            const teamMemberInitial = member.querySelector(".team-member-name-initial h1");
            gsap.set(teamMemberInitial, { scale: 1 });
          }
        });
      },
    });

    cardSlideInAnimation = ScrollTrigger.create({
      trigger: teamSection,
      start: "top top",
      end: `+=${window.innerHeight * 3}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        teamMemberCards.forEach((card, index) => {
          const slideInStagger = 0.075;
          const xRotationDuration = 0.4;
          const xRotationStart = index * slideInStagger;
          const xRotationEnd = xRotationStart + xRotationDuration;

          if (progress >= xRotationStart && progress <= xRotationEnd) {
            const cardProgress = (progress - xRotationStart) / xRotationDuration;
            const cardInitialX = 300 - index * 100;
            const cardTargetX = -50;
            const cardSlideInX = cardInitialX + cardProgress * (cardTargetX - cardInitialX);
            const cardSlideInRotation = 20 - cardProgress * 20;

            gsap.set(card, {
              x: `${cardSlideInX}%`,
              rotation: cardSlideInRotation,
            });
          } else if (progress > xRotationEnd) {
            gsap.set(card, {
              x: `-50%`,
              rotation: 0,
            });
          }

          const cardScaleStagger = 0.12;
          const cardScaleStart = 0.4 + index * cardScaleStagger;
          const cardScaleEnd = 1;

          if (progress >= cardScaleStart && progress <= cardScaleEnd) {
            const scaleProgress = (progress - cardScaleStart) / (cardScaleEnd - cardScaleStart);
            const scaleValue = 0.75 + scaleProgress * 0.25;
            gsap.set(card, { scale: scaleValue });
          } else if (progress > cardScaleEnd) {
            gsap.set(card, { scale: 1 });
          }
        });
      },
    });
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setupTeamAnimations();
      ScrollTrigger.refresh();
    }, 250);
  });

  setupTeamAnimations();
}