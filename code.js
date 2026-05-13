(function() {
    const greenDot = document.createElement('div');
    greenDot.id = "custom-waqas-dot";
    const style = document.createElement('style');
    style.innerHTML = `
        #custom-waqas-dot {
            position: fixed; top: 25px; right: 215px; 
            width: 12px; height: 12px; background-color: #22c55e;
            border-radius: 50%; z-index: 999999; cursor: pointer; display: none;
            box-shadow: 0 0 10px #22c55e; animation: pulse 1.5s infinite;
        }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
        #assets-hub { display: none; position: fixed; inset: 0; background: #020408; z-index: 2000000; flex-direction: column; }
    `;
    document.head.appendChild(style);
    document.body.appendChild(greenDot);

    const hub = document.createElement('div');
    hub.id = "assets-hub";
    hub.innerHTML = `
        <div style="padding:15px; background:#0a101f; display:flex; justify-content:space-between; border-bottom:1px solid #1e293b;">
            <span style="color:white; font-weight:900; font-size:10px;">MEMBER HUB</span>
            <span id="close-hub" style="color:#eab308; cursor:pointer; font-size:12px; font-weight:bold;">BACK TO TRADE</span>
        </div>
        <iframe id="assets-frame" src="./Assets.html" style="flex-grow:1; border:none;"></iframe>
    `;
    document.body.appendChild(hub);

    greenDot.onclick = () => {
        document.getElementById('assets-hub').style.display = 'flex';
        document.getElementById('assets-frame').src = "./Assets.html?v=" + Date.now();
    };
    document.getElementById('close-hub').onclick = () => document.getElementById('assets-hub').style.display = 'none';

    setInterval(() => {
        const terminal = document.getElementById('appTerminal');
        greenDot.style.display = (terminal && terminal.offsetParent !== null) ? 'block' : 'none';
    }, 500);
})();
