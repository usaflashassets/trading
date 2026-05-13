(function() {
    // 1. Green Dot Element Create Karna
    const greenDot = document.createElement('div'); // Anchor tag se div kar diya taaki direct link na khule
    greenDot.id = "custom-waqas-dot";
    
    // 2. Styling (Wahi alignment aur design jo aapne finalize kiya tha)
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
        /* Iframe Popup Overlay */
        #assets-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.8);
            z-index: 100000;
            justify-content: center;
            align-items: center;
        }
        #assets-container {
            width: 90%;
            height: 80%;
            background: #020408;
            border-radius: 20px;
            overflow: hidden;
            position: relative;
        }
        #close-assets {
            position: absolute;
            top: 10px;
            right: 15px;
            color: white;
            font-size: 24px;
            cursor: pointer;
            z-index: 10;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(greenDot);

    // 3. Popup Overlay Create Karna
    const overlay = document.createElement('div');
    overlay.id = "assets-overlay";
    overlay.innerHTML = `
        <div id="assets-container">
            <span id="close-assets">&times;</span>
            <iframe src="Assets.html" style="width:100%; height:100%; border:none;"></iframe>
        </div>
    `;
    document.body.appendChild(overlay);

    // 4. Click Event: Assets.html kholne ke liye
    greenDot.onclick = function() {
        document.getElementById('assets-overlay').style.display = 'flex';
    };

    document.getElementById('close-assets').onclick = function() {
        document.getElementById('assets-overlay').style.display = 'none';
    };

    // 5. Logic: Dashboard par show aur baki jgah hide
    setInterval(() => {
        const terminal = document.getElementById('appTerminal');
        const dot = document.getElementById('custom-waqas-dot');
        if (dot) {
            if (terminal && (terminal.style.display === 'flex' || terminal.offsetParent !== null)) {
                dot.style.display = 'block';
            } else {
                dot.style.display = 'none';
            }
        }
    }, 500);
})();
