// Nomor WhatsApp untuk chat
const nomorWhatsApp = "6283120658571"; // Ganti dengan nomor WhatsApp yang diinginkan

// Fungsi membuka modal produk
function bukaModalProduk(namaProduk, deskripsiProduk) {
    console.log('Membuka modal produk:', namaProduk);
    const modal = document.getElementById('modalProduk');
    const namaProdukElem = document.getElementById('modalNamaProduk');
    const deskripsiProdukElem = document.getElementById('modalDeskripsiProduk');
    const beliButton = document.getElementById('modalBeliButton');
    const whatsappButton = document.getElementById('modalWhatsappButton');

    namaProdukElem.textContent = namaProduk;
    deskripsiProdukElem.textContent = deskripsiProduk;
    console.log('Deskripsi produk diatur:', deskripsiProduk);

    // Sembunyikan tombol beli di modal
    beliButton.style.display = 'none';

    whatsappButton.onclick = function() {
        const pesan = encodeURIComponent('Halo, saya tertarik dengan produk: ' + namaProduk);
        const url = `https://wa.me/${nomorWhatsApp}?text=${pesan}`;
        window.open(url, '_blank');
    };

    modal.style.display = 'block';
    console.log('Modal ditampilkan');
}

// Fungsi menutup modal
function tutupModal() {
    const modal = document.getElementById('modalProduk');
    modal.style.display = 'none';
}

// Tutup modal jika klik di luar konten modal
window.onclick = function(event) {
    const modal = document.getElementById('modalProduk');
    if (event.target === modal) {
        tutupModal();
    }
};

// Fungsi pencarian produk
function cariProduk() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const productList = document.getElementById('productList');
    const products = productList.getElementsByClassName('product');

    for (let i = 0; i < products.length; i++) {
        const namaProduk = products[i].getElementsByTagName('h2')[0].textContent.toLowerCase();
        if (namaProduk.indexOf(filter) > -1) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
};

// Removed shopping cart display on page load as per user request
window.onload = function() {
    // No action on load
};
