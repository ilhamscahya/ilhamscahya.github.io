        /* ==========================================================================
           KONFIGURASI DATA DIRI (Cukup edit bagian objek di bawah ini)
           ========================================================================== */
        const USER_CONFIG = {
            fullName: "ILHAM CAHYA SUHERMAN",
            role: "Digital Product Manager",
            company: "Telkom Indonesia", // Isikan perusahaan/instansi saat ini
            
            // Daftar kontak & situs yang ingin ditampilkan
            contacts: [
                {
                    label: "EMAIL",
                    value: "ilham.suherman@telkom.co.id",
                    url: "mailto:ilham.suherman@telkom.co.id",
                    icon: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`
                },
                {
                    label: "LINKEDIN",
                    value: "linkedin.com/in/ilhamscahya",
                    url: "https://linkedin.com/in/ilhamscahya",
                    icon: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>`
                },
                {
                    label: "WEBSITE",
                    value: "Nalar",
                    url: "https://nalar.ilhamcahya.my.id",
                    icon: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`
                }
            ]
        };

        function downloadVCard() {
            const cleanPhone = USER_CONFIG.contacts.find(c => c.label.includes("TELP"))?.value || "";
            const email = USER_CONFIG.contacts.find(c => c.label === "EMAIL")?.value || "";
            const linkedin = USER_CONFIG.contacts.find(c => c.label === "LINKEDIN")?.url || "";
            const github = USER_CONFIG.contacts.find(c => c.label === "GITHUB")?.url || "";

            const vCardData = 
`BEGIN:VCARD
VERSION:3.0
FN:${USER_CONFIG.fullName}
TITLE:${USER_CONFIG.role}
ORG:${USER_CONFIG.company}
EMAIL;TYPE=INTERNET,WORK:${email}
TEL;TYPE=CELL:${cleanPhone}
URL:${window.location.href}
X-SOCIALPROFILE;TYPE=linkedin:${linkedin}
X-SOCIALPROFILE;TYPE=github:${github}
NOTE:Terminal Digital Business Card
END:VCARD`;

            const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${USER_CONFIG.fullName.replace(/\s+/g, '_')}_Contact.vcf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            showToast("[DOWNLOADED] File .VCF berhasil diunduh.");
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            if (toast) {
                toast.innerText = msg;
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 2800);
            }
        }

        let qrGenerated = false;

        function toggleQRCode() {
            const modal = document.getElementById('qr-modal');
            if (!modal) return;

            modal.classList.toggle('active');

            if (modal.classList.contains('active') && !qrGenerated) {
                const qrContainer = document.getElementById('qrcode-container');
                const qrUrlDisplay = document.getElementById('qr-url-display');
                
                qrContainer.innerHTML = "";
                const currentUrl = window.location.href;
                if (qrUrlDisplay) qrUrlDisplay.innerText = currentUrl;

                if (window.QRCode) {
                    new QRCode(qrContainer, {
                        text: currentUrl,
                        width: 160,
                        height: 160,
                        colorDark: "#0a0b0e",
                        colorLight: "#ffffff",
                        correctLevel: QRCode.CorrectLevel.H
                    });
                    qrGenerated = true;
                } else {
                    qrContainer.innerHTML = "<p style='color:red;'>QR Library Loading Failed</p>";
                }
            }
        }

        function updateClock() {
            const clockElem = document.getElementById('clock');
            const now = new Date();
            if (clockElem) clockElem.innerText = now.toLocaleTimeString('id-ID', { hour12: false }) + ' WIB';
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Render Text Profiles
            document.getElementById('display-name').innerText = USER_CONFIG.fullName;
            document.getElementById('display-role').innerText = USER_CONFIG.role;
            document.getElementById('display-company').innerText = "@ " + USER_CONFIG.company;
            document.getElementById('year').innerText = new Date().getFullYear();

            // Render Links
            const container = document.getElementById('link-container');
            container.innerHTML = USER_CONFIG.contacts.map(item => `
                <a href="${item.url}" target="_blank" class="link-card">
                    <div class="link-left">
                        <div class="link-icon-box">
                            <svg class="icon-svg" viewBox="0 0 24 24">${item.icon}</svg>
                        </div>
                        <div class="link-meta">
                            <span class="link-label">${item.label}</span>
                            <span class="link-value">${item.value}</span>
                        </div>
                    </div>
                    <div class="link-arrow">
                        <svg class="icon-svg" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                </a>
            `).join('');

            // Realtime Clock
            updateClock();
            setInterval(updateClock, 1000);
        });