
function onMutation() {
  if (window.location.href.includes("https://namu.wiki/w/")) {
    removeBadge();
    buildBadge();
  } else {
    removeBadge();
  }
}

const observer = new MutationObserver(onMutation);
observer.observe(document.getElementById("app"), {
  childList: true,
});

onMutation();
