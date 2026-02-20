document.addEventListener("DOMContentLoaded", () => {
  const thumbs = document.querySelectorAll(".video-thumb");

  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      const videoId = thumb.dataset.video;

      // Prevent multiple reloads
      if (thumb.classList.contains("playing")) return;
      thumb.classList.add("playing");

      thumb.outerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${rfaawa_O8KY}?autoplay=1"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          style="width:100%; height:100%; border-radius:16px;">
        </iframe>
      `;
    });
  });
});
