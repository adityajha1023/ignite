import { defineConfig } from "vite";
import { resolve } from "path";
import { readdirSync } from "fs";

// Dynamically get all event pages
const eventPages = readdirSync(resolve(__dirname, "events-pages"))
  .filter(file => file.endsWith(".html"))
  .reduce((acc, file) => {
    const name = file.replace(".html", "").replace(/-/g, "");
    acc[`event_${name}`] = resolve(__dirname, `events-pages/${file}`);
    return acc;
  }, {});

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
        // All event pages (dynamically loaded)
        ...eventPages,
      },
    },
    assetsInclude: [
      "**/*.jpeg",
      "**/*.jpg",
      "**/*.png",
      "**/*.svg",
      "**/*.gif",
      "**/*.webp",
    ],
    copyPublicDir: true,
  },
});
