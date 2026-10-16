# Dompetku v6 — penyimpanan online (Google)

1. Buat proyek di https://console.firebase.google.com (paket gratis Spark).
2. Authentication > Sign-in method: aktifkan **Google** (dan **Email/Password** bila mau).
3. Authentication > Settings > Authorized domains: tambahkan `tofanhidayat994.github.io`.
4. Firestore Database > Create database (mode produksi), lalu tab Rules: tempel isi `firestore.rules`, Publish.
5. Project settings > Your apps > Web (</>): daftarkan, salin `firebaseConfig` ke `firebase-config.js`.
6. Unggah semua berkas ke GitHub (timpa yang lama). Buka `cek.html` — semua baris harus berawalan ✓.
7. Tutup dan buka aplikasi dua kali (APK tidak perlu dibuat ulang).

Catatan: Google dan email+sandi adalah dua akun terpisah (data tidak otomatis sama). Di iPhone buka dari ikon layar utama.
