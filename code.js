(function() {
    // 1. Green Dot Element
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
        /* Full Screen Assets Modal */
        #assets-modal {
            display: none;
            position: fixed;
            inset: 0;
            background: #020408;
            z-index: 1000000;
            flex-direction: column;
        }
        #assets-header {
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #0a0f1a;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        #close-assets {
            color: #ef4444;
            font-weight: 800;
            font-size: 14px;
            text-transform: uppercase;
            cursor: pointer;
        }
        #assets-frame {
            flex-grow: 1;
            width: 100%;
            border: none;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(greenDot);

    // 2. Assets Modal Create Karna
    const modal = document.createElement('div');
    modal.id = "assets-modal";
    modal.innerHTML = `
        <div id="assets-header">
            <span style="font-size: 10px; font-weight: 900; color: #eab308; letter-spacing: 1px;">MEMBER ASSETS</span>
            <span id="close-assets">Close &times;</span>
        </div>
        <iframe id="assets-frame" src="Assets.html"></iframe>
    `;
    document.body.appendChild(modal);

    // 3. Click Events
    greenDot.onclick = function() {
        document.getElementById('assets-modal').style.display = 'flex';
        // Refresh iframe every time it opens to ensure auto-login syncs
        document.getElementById('assets-frame').src = "Assets.html";
    };

    document.getElementById('close-assets').onclick = function() {
        document.getElementById('assets-modal').style.display = 'none';
    };

    // 4. Logic: Dashboard visibility check
    setInterval(() => {
        const terminal = document.getElementById('appTerminal');
        const dot = document.getElementById('custom-waqas-dot');
        if (dot) {
            if (terminal && (terminal.style.display === 'flex' || terminal.offsetParent !== null)) {
                dot.style.display = 'block';
            } else {
                dot.style.display = 'none';
                document.getElementById('assets-modal').style.display = 'none';
            }
        }
    }, 500);
})();
