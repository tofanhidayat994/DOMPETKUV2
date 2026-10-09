# Dompetku - paket unggah GitHub (versi rata, tanpa folder) + scan struk

Semua file ada di SATU tingkat. Seret semuanya sekaligus ke repo (total sekitar 13 MB).

File aplikasi: index.html, manifest.json, sw.js, icon-192.png, icon-512.png, maskable-512.png,
apple-touch-icon.png, _config.yml, cek.html, PANDUAN.md
File pembaca struk: tesseract.min.js, worker.min.js, tesseract-core-simd-lstm.wasm.js,
tesseract-core-lstm.wasm.js, eng.traineddata.gz, LISENSI-pihak-ketiga.txt

1. GitHub -> repo Anda -> Add file -> Upload files -> seret SEMUA file -> Commit changes.
   (Jika file lama bernama sama sudah ada, GitHub akan menimpanya.)
2. Settings -> Pages -> Deploy from a branch -> main / (root).
3. Buka <alamat-aplikasi>/cek.html di Chrome. Semua baris harus berawalan centang,
   lalu tekan "Jalankan tes" untuk mencoba pembaca struk.
4. APK tidak perlu dibuat ulang: buka aplikasi dua kali setelah unggah.
