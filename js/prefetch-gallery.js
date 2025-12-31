// Gallery Image Prefetcher
// Prefetches gallery images during browser idle time for faster gallery loading

const GALLERY_IMAGES = [];

// Generate gallery image paths (25 images)
for (let i = 1; i <= 25; i++) {
    GALLERY_IMAGES.push(`/gallery/img${i}.webp`);
}

let prefetchStarted = false;
let currentIndex = 0;

function prefetchNext() {
    if (currentIndex >= GALLERY_IMAGES.length) return;

    const img = new Image();
    img.src = GALLERY_IMAGES[currentIndex];
    currentIndex++;

    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => prefetchNext(), { timeout: 2000 });
    } else {
        setTimeout(prefetchNext, 100);
    }
}

export function prefetchGalleryImages() {
    // Only run once per page load
    if (prefetchStarted) return;
    prefetchStarted = true;

    // Start prefetching after a delay to let main content load first
    setTimeout(() => {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => prefetchNext(), { timeout: 3000 });
        } else {
            prefetchNext();
        }
    }, 2000);
}

// Auto-run on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    prefetchGalleryImages();
});
