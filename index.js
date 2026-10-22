const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  // Capturo el elemento del DOM
  const itemsList = document.querySelector(".lista");
  const itemsEl = document.querySelectorAll(".lista li");
  console.log("Elementos", itemsEl);

  // Elimino elementos del DOM
  for (let element of itemsEl) {
    console.log("Elemento", element);
    element.remove();
  }
  // Agregar contenido y elemento
  for (const element of cosasQueAprendimos) {
    // Agregamos contenido texto
    const newLiEL = document.createElement("li");
    newLiEL.textContent = element.tema;
    // Agregamos contenido class
    newLiEL.classList.add(element.class || "item");
    console.log("tema-nueva class", newLiEL);

    // Agregamos el nuevo tag al dom
    itemsList.appendChild(newLiEL);
  }
}

main();
