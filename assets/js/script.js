
// script.js

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute("href").substring(1);
      loadSection(sectionId);
    });
  });
  
  function loadSection(sectionId) {
    const productView = document.getElementById("product-view");
    productView.innerHTML = `<h2>Cargando ${sectionId}...</h2>`;
    
    // Aquí cargaríamos contenido específico de cada sección
    setTimeout(() => {
      productView.innerHTML = `<h2>Contenido de la sección: ${sectionId}</h2>`;
    }, 500);
  }

  // Función para cargar más productos
function loadMoreProducts() {
  const productList = document.getElementById("product-list");

  // Ejemplo de productos adicionales
  const newProduct = document.createElement("div");
  newProduct.classList.add("product-item");
  newProduct.innerHTML = `
    <img src="assets/img/producto1.png" alt="Producto Nuevo">
    <h2>Producto Nuevo</h2>
    <p>Descripción breve del producto nuevo.</p>
    <span class="price">$69.99</span>
  `;
  
  productList.appendChild(newProduct);
}

// Evento para detectar el scroll al final de la página
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    loadMoreProducts();
  }
});