window.addEventListener("load", () => {
    const map = document.getElementById("indiaMap");

    map.addEventListener("load", () => {
        console.log("India SVG Loaded Successfully!");

        const svgDoc = map.contentDocument;

        if (!svgDoc) {
            console.log("SVG load failed.");
            return;
        }

        // Baad me yahan MP, CG, MH, UP, Odisha aur Jharkhand
        // ko highlight karne wala code add karenge.
    });
});
const states = [
  "Madhya_Pradesh",
  "Chhattisgarh",
  "Maharashtra",
  "Uttar_Pradesh",
  "Odisha",
  "Jharkhand"
];

let delay = 0;

states.forEach((state) => {
  setTimeout(() => {
    const element = document.getElementById(state);

    if (element) {
      element.classList.add("state-highlight");
    }
  }, delay);

  delay += 700;
});
