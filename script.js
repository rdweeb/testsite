const userAgent = navigator.userAgent;
const isMobile = /Mobi|Android|iPhone|iPad/i.test(userAgent);
if (isMobile) {
  window.location.href = "https://rdweeb.github.io/mobile-1/";
} else {
  window.location.href = "https://rdweeb.github.io/pc/";
}
