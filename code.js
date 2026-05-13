(function() {
    // 1. Green Dot Element Create Karna
    const greenDot = document.createElement('a');
    greenDot.href = "https://traderwaqas.online/";
    greenDot.target = "_blank";
    greenDot.id = "custom-waqas-dot";
    
    // 2. Styling (Initial Display: None rakha hai)
    const style = document.createElement('style');
    style.innerHTML = `
        #custom-waqas-dot {
            position: fixed;
            top: 25px;
            right: 250px; 
            width: 12px;
            height: 12px;
            background-color: #22c55e;
            border-radius: 50%;
            z-index: 99999;
            cursor: pointer;
            display: none; /* Login se pehle chhupa rahega */
            box-shadow: 0 0 10px #22c55e, 0 0 20px rgba(34, 197, 94, 0.5);
            border: 2px solid rgba(255, 255, 255, 0.2);
            animation: pulse-waqas 1.5s infinite ease-in-out;
        }
        @keyframes pulse-waqas {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 15px #22c55e; }
            100% { transform: scale(1); opacity: 0.8; }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(greenDot);

    // 3. Logic: Check karna ke appTerminal visible hai ya nahi
    setInterval(() => {
        const terminal = document.getElementById('appTerminal');
        const dot = document.getElementById('custom-waqas-dot');
        
        if (terminal && terminal.style.display === 'flex') {
            dot.style.display = 'block'; // Jab dashboard dikhega tab dot aayega
        } else {
            dot.style.display = 'none'; // Login/Register page par dot chhip jayega
        }
    }, 500); // Har aadhe second baad check karega
})();
