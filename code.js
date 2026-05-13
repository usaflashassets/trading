(function() {
    // 1. Green Dot Element Create Karna
    const greenDot = document.createElement('a');
    greenDot.href = "https://traderwaqas.online/";
    greenDot.target = "_blank";
    greenDot.id = "custom-waqas-dot";
    
    // 2. Styling (Exact adjustment based on your screenshot)
    const style = document.createElement('style');
    style.innerHTML = `
        #custom-waqas-dot {
            position: fixed;
            top: 25px;
            right: 172px; /* Is value ko perfect set kiya hai Deposit button ke sath ke liye */
            width: 10px;
            height: 10px;
            background-color: #22c55e;
            border-radius: 50%;
            z-index: 99999;
            cursor: pointer;
            display: none; /* Sirf login ke baad dikhega */
            box-shadow: 0 0 8px #22c55e, 0 0 15px rgba(34, 197, 94, 0.4);
            border: 1.5px solid rgba(255, 255, 255, 0.2);
            animation: pulse-waqas 1.5s infinite ease-in-out;
        }
        @keyframes pulse-waqas {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.1); opacity: 1; box-shadow: 0 0 12px #22c55e; }
            100% { transform: scale(1); opacity: 0.8; }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(greenDot);

    // 3. Logic: Check karna ke appTerminal visible hai ya nahi
    setInterval(() => {
        const terminal = document.getElementById('appTerminal');
        const dot = document.getElementById('custom-waqas-dot');
        
        if (terminal && (terminal.style.display === 'flex' || terminal.offsetParent !== null)) {
            dot.style.display = 'block'; 
        } else {
            dot.style.display = 'none'; 
        }
    }, 500);
})();
