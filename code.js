(function() {
    // 1. Green Dot Create Karna (GitHub link bilkul khatam)
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
            display: none; /* Login se pehle hide */
            box-shadow: 0 0 10px #22c55e, 0 0 20px rgba(34, 197, 94, 0.5);
            border: 2px solid rgba(255, 255, 255, 0.2);
            animation: pulse-waqas 1.5s infinite ease-in-out;
        }
        @keyframes pulse-waqas {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 0.8; }
        }
        /* Assets Full Screen Overlay */
        #assets-hub-screen {
            display: none;
            position: fixed;
            inset: 0;
            background: #020408;
            z-index: 2000000;
            flex-direction: column;
        }
        #assets-header {
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #0a101f;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        #close-assets-hub {
            color: #eab308;
            font-weight: 900;
            font-size: 11px;
            text-transform: uppercase;
            cursor: pointer;
            border: 1px solid #eab308;
            padding: 5px 12px;
            border-radius: 8px;
            letter-spacing: 1px;
        }
        #assets-frame {
            flex-grow: 1;
            width: 100%;
            height: 100%;
            border: none;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(greenDot);

    // 2. Assets Overlay Structure
    const overlay = document.createElement('div');
    overlay.id = "assets-hub-screen";
    overlay.innerHTML = `
        <div id="assets-header">
            <span style="font-size: 10px; font-weight: 900; color: white; letter-spacing: 1px;">MEMBER HUB</span>
            <div id="close-assets-hub">BACK TO TRADE</div>
        </div>
        <iframe id="assets-frame" src="Assets.html"></iframe>
    `;
    document.body.appendChild(overlay);

    // 3. Click Events (Ab koi GitHub URL nahi hai)
    greenDot.onclick = function() {
        document.getElementById('assets-hub-screen').style.display = 'flex';
        // Assets.html ko load/refresh karna
        document.getElementById('assets-frame').src = "Assets.html";
    };

    document.getElementById('close-assets-hub').onclick = function() {
        document.getElementById('assets-hub-screen').style.display = 'none';
    };

    // 4. Logic: Login/Dashboard Control
    setInterval(() => {
        const terminal = document.getElementById('appTerminal');
        const dot = document.getElementById('custom-waqas-dot');
        const hub = document.getElementById('assets-hub-screen');

        if (terminal && (terminal.style.display === 'flex' || terminal.offsetParent !== null)) {
            // Sirf login dashboard par dot dikhao
            if (dot) dot.style.display = 'block';
        } else {
            // Login/Register page par sab kuch hide rakho
            if (dot) dot.style.display = 'none';
            if (hub) hub.style.display = 'none';
        }
    }, 500);
})();
