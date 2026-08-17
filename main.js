(function () {
    // Prevent multiple UI instances
    if (document.getElementById('blooket-mod-ui')) {
        alert('Mod Menu is already open!');
        return;
    }

    // --- 1. Create Main Container ---
    const gui = document.createElement('div');
    gui.id = 'blooket-mod-ui';
    gui.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 220px;
        background: #0f172a;
        color: #f8fafc;
        border: 2px solid #38bdf8;
        border-radius: 12px;
        padding: 14px;
        z-index: 999999;
        font-family: system-ui, -apple-system, sans-serif;
        box-shadow: 0 10px 25px rgba(0,0,0,0.7);
        user-select: none;
    `;

    // --- 2. Build Menu HTML ---
    gui.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid #334155; padding-bottom: 6px;">
            <span style="font-weight: 800; font-size: 14px; color: #38bdf8; letter-spacing: 0.5px;">BlooketMod v1.0</span>
            <button id="bm-close-btn" style="background: none; color: #ef4444; border: none; font-size: 18px; font-weight: bold; cursor: pointer;">✕</button>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px;">
            <button id="bm-highlight-answers" style="background: #2563eb; color: #fff; border: none; padding: 8px; border-radius: 8px; font-weight: 600; font-size: 12px; cursor: pointer;">Highlight Answers</button>
            <button id="bm-highlight-boxes" style="background: #0d9488; color: #fff; border: none; padding: 8px; border-radius: 8px; font-weight: 600; font-size: 12px; cursor: pointer;">Highlight Chests/Boxes</button>
            <button id="bm-custom-bg" style="background: #7c3aed; color: #fff; border: none; padding: 8px; border-radius: 8px; font-weight: 600; font-size: 12px; cursor: pointer;">Darken Background</button>
        </div>
        <div id="bm-status" style="margin-top: 10px; font-size: 10px; color: #94a3b8; text-align: center;">Status: Ready</div>
    `;

    document.body.appendChild(gui);

    // --- 3. Event Listeners & Mod Functions ---

    // Close Button
    document.getElementById('bm-close-btn').onclick = () => gui.remove();

    // Function: Highlight active answer buttons on screen
    document.getElementById('bm-highlight-answers').onclick = () => {
        const buttons = document.querySelectorAll('[class*="answerContainer"], [class*="answerOption"]');
        if (buttons.length > 0) {
            buttons.forEach(btn => {
                btn.style.border = '4px solid #38bdf8';
                btn.style.boxShadow = '0 0 15px #38bdf8';
            });
            updateStatus('Answers Highlighted!');
        } else {
            updateStatus('No answer buttons found on screen');
        }
    };

    // Function: Highlight clickable game boxes/chests
    document.getElementById('bm-highlight-boxes').onclick = () => {
        const boxes = document.querySelectorAll('[class*="choiceContainer"], [class*="chest"]');
        if (boxes.length > 0) {
            boxes.forEach(box => {
                box.style.border = '4px solid #f59e0b';
            });
            updateStatus('Boxes Highlighted!');
        } else {
            updateStatus('No chests/boxes active');
        }
    };

    // Function: Modify page background visuals directly
    document.getElementById('bm-custom-bg').onclick = () => {
        document.body.style.backgroundColor = '#020617';
        updateStatus('Background modified!');
    };

    // Helper to update menu status message
    function updateStatus(msg) {
        document.getElementById('bm-status').innerText = 'Status: ' + msg;
    }
})();
