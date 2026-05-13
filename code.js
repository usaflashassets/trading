(function() {
    // 1. Green Dot Element (Aapki perfect alignment aur design ke sath)
    const greenDot = document.createElement('div');
    greenDot.id = "custom-waqas-dot";
    
    const style = document.createElement('style');
    style.innerHTML = `
        #custom-waqas-dot {
            position: fixed;
            top: 25px;
            right: 215px; 
            width: 12px;
            height: 12px;
            background-color: #22c55e;
            border-radius: 50%;
            z-index: 999999;
            cursor: pointer;
            display: none; /* Login se pehle chhupa rahega */
            box-shadow: 0 0 10px #22c55e, 0 0 20px rgba(34, 197, 94, 0.5);
            border: 2px solid rgba(255, 255, 255, 0.2);
            animation: pulse-waqas 1.5s infinite ease-in-out;
        }
        @keyframes pulse-waqas {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 0.8; }
        }
        /* Assets Full Screen Modal */
        #assets-full-screen {
            display: none;
            position: fixed;
            inset: 0;
            background: #020408;
            z-index: 2000000;
            flex-direction: column;
        }
        #assets-top-nav {
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #0a101f;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        #btn-close-assets {
            color: #ff4444;
            font-weight: 800;
            font-size: 12px;
            text-transform: uppercase;
            cursor: pointer;
            border: 1px solid rgba(255,68,68,0.3);
            padding: 4px 10px;
            border-radius: 6px;
        }
        #assets-frame-box {
            flex-grow: 1;
            width: 100%;
            height: 100%;
            border: none;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(greenDot);

    // 2. Assets Screen Structure
    const assetsOverlay = document.createElement('div');
    assetsOverlay.id = "assets-full-screen";
    assetsOverlay.innerHTML = `
        <div id="assets-top-nav">
            <span style="font-size: 10px; font-weight: 900; color: #eab308; letter-spacing: 1px; font-family: sans-serif;">MY ASSETS HUB</span>
            <div id="btn-close-assets">CLOSE &times;</div>
        </div>
        <iframe id="assets-frame-box" src="Assets.html"></iframe>
    `;
    document.body.appendChild(assetsOverlay);

    // 3. Click Events
    greenDot.onclick = function() {
        document.getElementById('assets-full-screen').style.display = 'flex';
        // Force refresh iframe to ensure session sync
        document.getElementById('assets-frame-box').contentWindow.location.reload();
    };

    document.getElementById('btn-close-assets').onclick = function() {
        document.getElementById('assets-full-screen').style.display = 'none';
    };

    // 4. Logic: Hide on Login/Register and Show on Terminal
    setInterval(() => {
        const terminal = document.getElementById('appTerminal');
        const dot = document.getElementById('custom-waqas-dot');
        const overlay = document.getElementById('assets-full-screen');

        if (terminal && (terminal.style.display === 'flex' || terminal.offsetParent !== null)) {
            // Dashboard par hai toh dot dikhao
            if (dot) dot.style.display = 'block';
        } else {
            // Login/Register page par dot aur assets dono hide kar do
            if (dot) dot.style.display = 'none';
            if (overlay) overlay.style.display = 'none';
        }
    }, 500);
})();
