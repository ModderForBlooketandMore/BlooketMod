(function () {
    // Check if UI already exists to avoid duplication
    if (document.getElementById('bom-mod-menu')) {
        console.log('Menu already running!');
        return;
    }

    // Main Container
    const container = document.createElement('div');
    container.id = 'bom-mod-menu';
    container.style.cssText = `
        position: fixed;
        top: 15px;
        right: 15px;
        width: 220px;
        background: #121212;
        color: #ffffff;
        border: 2px solid #333;
        border-radius: 10px;
        padding: 12px;
        z-index: 999999;
        font-family: Arial, sans-serif;
        box-shadow: 0 4px 12px rgba(0,0,0,0.6);
    `;

    // Menu Content
    container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid #333; padding-bottom: 5px;">
            <span style="font-weight: bold; font-size: 14px;">blooket&OtherModder</span>
            <button id="bom-close-btn" style="background: transparent; color: #ff5555; border: none; font-size: 16px; cursor: pointer;">✕</button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
            <button id="bom-action-1" style="background: #2563eb; color: #fff; border: none; padding: 8px; border-radius: 6px; cursor: pointer;">Log Page State</button>
        </div>
    `;

    document.body.appendChild(container);

    // Button Events
    document.getElementById('bom-close-btn').onclick = () => container.remove();
    document.getElementById('bom-action-1').onclick = () => {
        alert('blooketandOtherModder script executed successfully!');
    };
})();
