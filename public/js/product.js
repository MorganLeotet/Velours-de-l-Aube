    document.addEventListener('DOMContentLoaded', function () {
        const openButtons = document.querySelectorAll('.open-product');
        const overlay = document.getElementById('panel-overlay');
        const panels = document.querySelectorAll('.product-panel');

      // Ouvre le panel correspondant
    function openPanel(id) {
        // Ferme d'abord tous les panels
        panels.forEach(p => {
            p.classList.remove('active');
            p.setAttribute('aria-hidden', 'true');
        });
        // Active overlay
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');

        const panel = document.getElementById('product-' + id);
        if (!panel) {
            console.warn('Aucun panel trouvé pour product-' + id);
            return;
        }
        panel.classList.add('active');
        panel.setAttribute('aria-hidden', 'false');

        // focus sur le panel (aide l'accessibilité)
        panel.focus && panel.focus();
    }

      // Ferme tous les panels
        
    function closePanels() {
        panels.forEach(p => {
            p.classList.remove('active');
            p.setAttribute('aria-hidden', 'true');
        });
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
    }

      // Clic sur image / lien
        openButtons.forEach(btn => {
            btn.addEventListener('click', function (e) {
            e.preventDefault();
            const id = btn.getAttribute('data-product');
            if (!id) return;
            openPanel(id);
            });
        });

      // Boutons fermer dans les panels
        panels.forEach(panel => {
            const closeBtn = panel.querySelector('.close-panel');
            if (closeBtn) {
            closeBtn.addEventListener('click', closePanels);
            }
        });

      // Clic sur l'overlay pour fermer
        overlay.addEventListener('click', closePanels);

      // Échap pour fermer
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' || e.key === 'Esc') {
            closePanels();
            }
        });
    });