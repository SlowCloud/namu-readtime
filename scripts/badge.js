var badge;
function removeBadge() {
    if(badge) badge.remove();
}

function buildBadge() {
    badge = document.createElement("p");
    const article = document.getElementsByClassName("rnvX2WIO")[0];

    const text = article.textContent;
    const reg = /[^\s]+/g;
    const words = text.matchAll(reg);
    const readingTime = Math.round([...words].length / 200);
    badge.textContent = `⏱️ 해당 항목을 읽는 데 약 ${readingTime}분이 걸립니다.`;

    const title = article.querySelector("h1");
    title.insertAdjacentElement("beforebegin", badge);
}