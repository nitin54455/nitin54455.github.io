let cartCount = 0;

// Add event listeners to all add-to-cart buttons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");
  const cartDisplay = document.getElementById("cart-count");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productCard = btn.closest(".product-card");
      const productName = productCard.dataset.name;

      cartCount++;
      cartDisplay.innerText = cartCount;
      alert(`${productName} added to cart!`);
    });
  });
});
