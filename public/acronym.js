const acronymRoot = document.getElementById("acronymRoot");
const acronymSentenceRoot = document.getElementById("acronymSentence");

function makeAcronym(event) {
  event.preventDefault();
  const [sentenceEl] = event.target;
  const value = sentenceEl.value;
  const words = value.split(" ");
  acronymRoot.innerHTML = words.map((w) => w[0]).join(" ");
  acronymSentenceRoot.innerHTML = value;
  event.target.reset();
}
