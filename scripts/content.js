function onMutation() {
  removeBadge();
  if (window.location.href.includes("https://namu.wiki/w/")) {
    buildBadge();
  }
}

const observer = new MutationObserver(onMutation);
observer.observe(document.getElementById("app"), {
  childList: true,
});

onMutation();
