# 🏮 Restoran Nuansa Lama
**Modern Restaurant Web System — Online Ordering, Payment & Reservation**

<p align="center">
  <img src="https://img.shields.io/badge/PHP-Backend-blue?style=flat-square">
  <img src="https://img.shields.io/badge/MySQL-Database-orange?style=flat-square">
  <img src="https://img.shields.io/badge/Responsive-Yes-success?style=flat-square">
  <img src="https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=flat-square">
</p>

<hr></hr>

## 🌟 Overview
**Restoran Nuansa Lama** adalah aplikasi web restoran modern dengan fitur pemesanan makanan online, sistem pembayaran digital, dan layanan reservasi meja.  
Dibangun menggunakan **PHP Native**, **MySQL**, dan antarmuka web responsif, aplikasi ini ditujukan untuk meningkatkan efisiensi operasional dan pengalaman pelanggan.

<hr></hr>

## 🚀 Fitur Utama

### 👥 Pelanggan
- Registrasi & Login akun  
- Menu makanan lengkap (pembuka, utama, penutup, minuman)  
- Keranjang belanja  
- Pemesanan makanan online  
- Pembayaran (Transfer Bank | E-Wallet | Offline)  
- Nota pembayaran otomatis  
- Reservasi meja real-time  
- Promo & Diskon  
- Cek stok makanan harian  

### 🛠 Admin Panel
- Dashboard statistik (orders, revenue, pending, selesai)  
- Kelola pesanan (CRUD + ubah status)  
- Kelola reservasi  
- Kelola menu (CRUD + gambar + stok)  
- Kelola user  
- Kelola promo  
- Laporan grafik (total orders, pending, done, revenue)  
- Monitoring reservasi harian  

## 🧰 Teknologi
| Layer     | Teknologi               |
|----------|--------------------------|
| Frontend | HTML, CSS, JavaScript    |
| Backend  | PHP Native               |
| Database | MySQL                    |
| Server   | XAMPP                    |
| UI       | Bootstrap (optional)     |


## 🗄 Struktur Database

### 📌 Tabel Utama
- `users`  
- `menu`  
- `orders`  
- `payment`  
- `promo`  
- `data_reservasi`

### 📌 View
- `pesanan_ringkas` — menggabungkan item pesanan dalam satu tampilan rekap

## ⚙️ Instalasi & Setup (XAMPP)

### 
1️⃣ Clone Repository
git clone https://github.com/USERNAME/nuansa-lama.git

2️⃣ Pindah ke folder XAMPP
C:\xampp\htdocs\nuansa-lama

3️⃣ Import database

- Buka: http://localhost/phpmyadmin

- Buat database: nuansa_lama

- Import: nuansa_lama.sql

4️⃣ Jalankan server

- Start Apache

- Start MySQL

5️⃣ Akses website
http://localhost/nuansa-lama/

## 👥 Developer Team

Kelompok 4 — Sistem Informasi 2023-H
Universitas Negeri Surabaya

1. Fahmi Hasan Firdaus
2. Adelia Putri
3. I Putu Surya Nursari Pratama
4. Luky Ibrahim Zein Al Hakim
5. Julia Federova Sitio
