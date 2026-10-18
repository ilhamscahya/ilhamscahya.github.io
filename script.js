document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Profile Info
    initProfile();

    // 2. Render Dynamic Components
    renderContacts();
    renderSkills();
    renderProjects();
    renderLogs();

    // 3. Initialize Realtime Clock
    initClock();

    // 4. Attach Event Listeners
    setupEventListeners();
});

function initProfile() {
    const p = PROFILE_CONFIG;
    document.getElementById('sidebar-name').textContent = p.name;
    document.getElementById('sidebar-role').textContent = p.title;
    document.getElementById('hero-title').textContent = p.name;
    document.getElementById('hero-bio').textContent = p.bio;
    document.getElementById('user-initials').textContent = p.initials || 'DEV';
}

function renderContacts() {
    const container = document.getElementById('contact-list-container');
    if (!container) return;

    container.innerHTML = PROFILE_CONFIG.contacts.map(item => `
        <a href="${item.href}" target="_blank" rel="noopener" class="contact-item p-3 border border-terminal-border/80 bg-terminal-card/40 hover:border-cyan-500/60 hover:bg-cyan-950/20 transition rounded-sm block group">
            <div class="flex justify-between items-center mb-1">
                <span class="text-[10px] text-gray-500 font-mono tracking-wider">${item.label}</span>
                <span class="text-[9px] border border-cyan-500/30 text-cyan-400 px-1 py-0.2 rounded-sm">${item.badge}</span>
            </div>
            <div class="text-xs text-white font-semibold truncate group-hover:text-cyan-300 flex items-center gap-1.5">
                <span>${item.icon}</span>
                <span class="truncate">${item.value}</span>
            </div>
        </a>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = PROFILE_CONFIG.skills.map(skill => `
        <div class="space-y-1">
            <div class="flex justify-between text-xs">
                <span class="text-gray-300 font-medium">${skill.name}</span>
                <span class="text-cyan-400 font-mono">${skill.level}% <span class="text-[10px] text-gray-500">(${skill.tag})</span></span>
            </div>
            <div class="w-full bg-gray-900 border border-terminal-border/60 h-2.5 rounded-sm p-0.5">
                <div class="bg-cyan-400 h-full rounded-xs transition-all duration-1000" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const body = document.getElementById('projects-table-body');
    if (!body) return;

    body.innerHTML = PROFILE_CONFIG.projects.map(item => `
        <tr class="hover:bg-cyan-950/20 transition">
            <td class="py-2.5 text-cyan-400">${item.pid}</td>
            <td class="py-2.5 font-semibold text-white">${item.name}</td>
            <td class="py-2.5 text-gray-400">${item.role}</td>
            <td class="py-2.5 text-right">
                <span class="px-1.5 py-0.5 text-[10px] border border-green-500/40 text-green-400 bg-green-950/30 rounded-sm">
                    ${item.status}
                </span>
            </td>
        </tr>
    `).join('');
}

function renderLogs() {
    const container = document.getElementById('logs-container');
    if (!container) return;

    container.innerHTML = PROFILE_CONFIG.logs.map(log => {
        let tagColor = "text-cyan-400";
        if (log.tag === "OKAY") tagColor = "text-green-400";
        if (log.tag === "INIT") tagColor = "text-yellow-400";

        return `
            <div class="p-2 bg-terminal-card/30 border-l-2 border-cyan-500/50 text-[11px] leading-relaxed">
                <span class="text-gray-500">[${log.timestamp}]</span>
                <span class="${tagColor} font-bold">[${log.tag}]</span>
                <span class="text-gray-300">${log.message}</span>
            </div>
        `;
    }).join('');
}

function initClock() {
    const display = document.getElementById('time-display');
    if (!display) return;

    function update() {
        const now = new Date();
        display.textContent = now.toUTCString().split(' ')[4] + ' UTC';
    }
    update();
    setInterval(update, 1000);
}

function setupEventListeners() {
    // vCard Buttons
    const btnVcardSide = document.getElementById('btn-save-vcard-side');
    const btnVcardMain = document.getElementById('btn-save-vcard-main');

    if (btnVcardSide) btnVcardSide.addEventListener('click', generateAndDownloadVCard);
    if (btnVcardMain) btnVcardMain.addEventListener('click', generateAndDownloadVCard);

    // QR Modal Buttons
    const btnQrSide = document.getElementById('btn-qr-side');
    const btnQrMain = document.getElementById('btn-show-qr-main');
    const modalQr = document.getElementById('qr-modal');
    const btnCloseQr = document.getElementById('btn-close-qr');
    const btnCloseQrBottom = document.getElementById('btn-close-qr-bottom');
    const btnCopyLink = document.getElementById('btn-copy-link');

    if (btnQrSide) btnQrSide.addEventListener('click', () => openQrModal());
    if (btnQrMain) btnQrMain.addEventListener('click', () => openQrModal());
    if (btnCloseQr) btnCloseQr.addEventListener('click', () => closeQrModal());
    if (btnCloseQrBottom) btnCloseQrBottom.addEventListener('click', () => closeQrModal());

    if (btnCopyLink) {
        btnCopyLink.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href);
            showToast('LINK TERSALIN KE CLIPBOARD!');
        });
    }

    const btnDownloadQr = document.getElementById('btn-download-qr');
    if (btnDownloadQr) {
        btnDownloadQr.addEventListener('click', () => {
            const qrImg = document.getElementById('qr-code-img');
            const a = document.createElement('a');
            a.href = qrImg.src;
            a.download = `${PROFILE_CONFIG.vcard.firstName}_QR_Code.png`;
            a.click();
            showToast('QR CODE ERBERHASIL DIUNDUH!');
        });
    }
}

function generateAndDownloadVCard() {
    const v = PROFILE_CONFIG.vcard;
    const vcardData = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N:${v.lastName};${v.firstName};;;`,
        `FN:${v.firstName} ${v.lastName}`,
        `ORG:${v.organization}`,
        `TITLE:${v.jobTitle}`,
        `TEL;TYPE=CELL:${v.phone}`,
        `EMAIL:${v.email}`,
        `URL:${v.website}`,
        `ADR;TYPE=WORK:;;${v.address};;;;`,
        'END:VCARD'
    ].join('\n');

    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${v.firstName}_${v.lastName}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('KONTAK (.VCF) BERHASIL DIUNDUH!');
}

function openQrModal() {
    const currentUrl = encodeURIComponent(window.location.href);
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${currentUrl}&color=000000&bgcolor=ffffff`;
    
    document.getElementById('qr-code-img').src = qrApiUrl;
    document.getElementById('qr-modal').classList.remove('hidden');
}

function closeQrModal() {
    document.getElementById('qr-modal').classList.add('hidden');
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg text-xs px-4 py-2.5 rounded-sm font-mono flex items-center gap-2 pointer-events-auto transition-all duration-300 transform translate-y-2';
    toast.innerHTML = `<span class="text-cyan-400 font-bold">[SYS_MSG]</span> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('translate-y-2');
    }, 10);

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
