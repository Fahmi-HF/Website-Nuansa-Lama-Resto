document.getElementById('applyPromo').addEventListener('click', function () {
    const kodePromo = document.getElementById('kodePromo').value;

    if (!kodePromo) {
        alert('Masukkan kode promo terlebih dahulu.');
        return;
    }

    // Kirim kode promo ke backend
    fetch('check_promo.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `kode_promo=${encodeURIComponent(kodePromo)}`
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const total_hargaElement = document.getElementById('total_harga');
                const totalHarga = parseInt(total_hargaElement.textContent.replace(/\./g, '')); // Konversi ke angka
                const hargaDiskon = totalHarga - (totalHarga * data.diskon / 100);

                total_hargaElement.textContent = hargaDiskon.toLocaleString('id-ID');
                alert(`Diskon ${data.diskon}% berhasil diterapkan!`);
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Terjadi kesalahan. Silakan coba lagi.');
        });
});
