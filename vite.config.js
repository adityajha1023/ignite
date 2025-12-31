import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        events: resolve(__dirname, "events.html"),
        expedition: resolve(__dirname, "expedition.html"),
        gallery: resolve(__dirname, "gallery.html"),
        login: resolve(__dirname, "login.html"),
        privacy: resolve(__dirname, "privacy.html"),
        register: resolve(__dirname, "register.html"),
        terms: resolve(__dirname, "terms.html"),
        // Event pages
        justAMinute: resolve(__dirname, "events-pages/just-a-minute.html"),
        modelExhibitionCollege: resolve(__dirname, "events-pages/model-exhibition-college.html"),
        modelExhibition: resolve(__dirname, "events-pages/model-exhibition.html"),
        pixelQuest: resolve(__dirname, "events-pages/pixel-quest.html"),
        posterPresentation: resolve(__dirname, "events-pages/poster-presentation.html"),
        roboRace: resolve(__dirname, "events-pages/robo-race.html"),
        techArtDesign: resolve(__dirname, "events-pages/tech-art-and-design-competition.html"),
        techTreasureHunt: resolve(__dirname, "events-pages/tech-treasure-hunt.html"),
        technicalQuiz: resolve(__dirname, "events-pages/technical-quiz-competition.html"),
      },
    },
    assetsInclude: [
      "**/*.jpeg",
      "**/*.jpg",
      "**/*.png",
      "**/*.svg",
      "**/*.gif",
    ],
    copyPublicDir: true,
  },
});
