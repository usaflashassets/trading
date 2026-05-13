(function() {
    // 1. Green Dot Element Create Karna
    const greenDot = document.createElement('div');
    greenDot.id = "custom-waqas-dot";
    
    // 2. Styling (Wahi alignment jo aapko pasand thi)
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
            z-index: 99999;
            cursor: pointer;
            display: none;
            box-shadow: 0 0 10px #22c55e, 0 0 20px rgba(34, 197, 94, 0.5);
            border: 2px solid rgba(255, 255, 255, 0.2);
            animation: pulse-waqas 1.5s infinite ease-in-out;
        }
        @keyframes pulse-waqas {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 0.8; }
        }
        /* Full Screen Assets Overlay */
        #assets-overlay-screen {
            display: none;
            position: fixed;
            inset: 0;
            background: #020408;
            z-index: 1000000;
            flex-direction: column;
        }
        #assets-header-bar {
            padding: 12px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #0a0f1a;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        #back-to-trade {
            color: #eab308;
            font-weight: 800;
            font-size: 12px;
            text-transform: uppercase;
            cursor: pointer;
            border: 1px solid #eab308;
            padding: 5px 12px;
            border-radius: 8px;
        }
        #assets-iframe {
            flex-grow: 1;
            width: 100%;
            height: 100%;
            border: none;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(greenDot);

    // 3. Assets Screen Structure
    const overlay = document.createElement('div');
    overlay.id = "assets-overlay-screen";
    overlay.innerHTML = `
        <div id="assets-header-bar">
            <span style="font-size: 11px; font-weight: 900; color: white; letter-spacing: 1px;">MY ASSETS</span>
            <div id="back-to-trade">← Back to Trade</div>
        </div>
        <iframe id="assets-iframe" src="Assets.html"></iframe>
    `;
    document.body.appendChild(overlay);

    // 4. Click Events
    greenDot.onclick = function() {
        document.getElementById('assets-overlay-screen').style.display = 'flex';
        // Auto-refresh iframe on click to sync Firebase session
        document.getElementById('assets-iframe').contentWindow.location.reload();
    };

    document.getElementById('back-to-trade').onclick = function() {
        document.getElementById('assets-overlay-screen').style.display = 'none';
    };

    // 5. Logic: Dashboard par show aur Login page par hide
    setInterval(() => {
        const terminal = document.getElementById('appTerminal');
        const dot = document.getElementById('custom-waqas-dot');
        if (dot) {
            if (terminal && (terminal.style.display === 'flex' || terminal.offsetParent !== null)) {
                dot.style.display = 'block';
            } else {
                dot.style.display = 'none';
                document.getElementById('assets-overlay-screen').style.display = 'none';
            }
        }
    }, 500);
})();
