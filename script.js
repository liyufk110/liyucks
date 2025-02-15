let cart = [];
let currentIndex = 0;

// Slider otomatis
function showSlide(index) {
    const slider = document.querySelector(".slider");
    const totalSlides = document.querySelectorAll(".slider img").length;

    currentIndex = (index + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() { showSlide(currentIndex + 1); }
function prevSlide() { showSlide(currentIndex - 1); }
setInterval(nextSlide, 5000);

// Tambah ke keranjang
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    document.getElementById("cart").innerHTML = cart.map(item => `<li>${item.name} - Rp ${item.price}</li>`).join("");
}

function checkout() {
    if (cart.length === 0) return alert("Keranjang kosong!");
    let orderDetails = cart.map(item => `${item.name} - Rp ${item.price}`).join("\n");
    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    let waLink = `https://wa.me/6281234567890?text=Pesanan%20Baru:%0A${orderDetails}%0ATotal:%20Rp%20${totalPrice}`;
    window.open(waLink, "_blank");
}

// Form kontak
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    window.open(`mailto:email_toko@example.com?subject=Pesan%20dari%20${name}&body=${message}`, "_blank");
});
