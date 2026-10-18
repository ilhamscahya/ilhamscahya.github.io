# Terminal UI - Digital Business Card (GitHub Pages)

Situs web personal bertema **Cyberpunk / Terminal Dashboard UI** yang dirancang sebagai kartu nama online interaktif untuk profesional software engineer, product manager, atau developer.

---

## 🚀 Fitur Utama
1. **Desain Terminal Cyberpunk**: Mengadopsi estetika dashboard monitor terminal modern (Dark Mode, Neon Cyan/Green accents, monospace typography).
2. **Download vCard (.vcf)**: Mengizinkan kenalan/klien langsung menyimpan kontak Anda ke HP mereka dengan 1 klik tombol.
3. **Modal QR Code**: Generator QR Code otomatis yang dapat di-scan langsung dari layar smartphone saat bertatap muka.
4. **Konfigurasi Mudah (`config.js`)**: Anda dapat mengubah isi nama, bio, link sosial media, skill, dan histori pekerjaan tanpa perlu mengubah struktur HTML.
5. **Siap GitHub Pages**: Bebas *build step* (Zero-build setup). Cukup push file ke repositori GitHub dan aktifkan GitHub Pages.

---

## 📦 Struktur File
```text
├── index.html       # Struktur HTML utama
├── style.css        # Custom CSS & Tema Cyberpunk Terminal
├── config.js        # File konfigurasi data diri (EDIT DI SINI)
├── script.js        # Logic interaktif (vCard generator, QR code, toast notifications)
└── README.md        # Dokumentasi panduan
```

---

## 🛠️ Cara Mengubah Data Diri Anda
Buka file `config.js` dengan text editor pilihan Anda (VS Code, Notepad, dll). Cukup ubah nilai di dalam objek `PROFILE_CONFIG`:

```javascript
const PROFILE_CONFIG = {
    name: "NAMA LENGKAP ANDA",
    title: "SENIOR FRONTEND ENGINEER",
    location: "Jakarta, Indonesia",
    bio: "Deskripsi singkat tentang diri Anda...",
    
    // Data kontak untuk file .vcf (Kartu Nama Smartphone)
    vcard: {
        firstName: "NamaDepan",
        lastName: "NamaBelakang",
        phone: "+6281234567890",
        email: "emailanda@example.com",
        // ...
    },
    
    // Link Sosial Media
    contacts: [ ... ],

    // Skill Metrics
    skills: [ ... ],

    // Proyek & Timeline
    projects: [ ... ],
    logs: [ ... ]
};
```

---

## 🌐 Cara Deploy ke GitHub Pages (Kurang dari 2 Menit)

1. **Buat Repositori Baru di GitHub**
   - Buka [GitHub](https://github.com) -> Klik tombol **New Repository**.
   - Beri nama repositori, misal: `kartu-nama` atau `username.github.io`.

2. **Upload File**
   - Extract ZIP ini dan commit/push semua file (`index.html`, `style.css`, `config.js`, `script.js`, `README.md`) ke repositori GitHub tersebut.

3. **Aktifkan GitHub Pages**
   - Di repositori GitHub Anda, buka menu **Settings** -> **Pages**.
   - Pada bagian **Build and deployment** -> **Branch**, pilih `main` atau `master` dan folder `/ (root)`.
   - Klik **Save**.
   - Tunggu 1-2 menit, situs kartu nama online Anda akan langsung dapat diakses di URL:
     `https://username.github.io/kartu-nama/`

---

## 🎨 Kustomisasi Gaya / Warna
Jika ingin mengubah warna aksen (misal dari Neon Cyan ke Neon Green atau Magenta), Anda dapat mengedit variabel warna di file `style.css`:
```css
:root {
    --accent-cyan: #00f0ff; /* Ubah warna aksen utama di sini */
    --accent-green: #00ff66;
}
```
