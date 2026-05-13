(function() {
    // 1. Green Dot Element Create Karna
    const greenDot = document.createElement('a');
    greenDot.href = "https://traderwaqas.online/";
    greenDot.target = "_blank";
    greenDot.id = "waqas-link-dot";
    
    // 2. Neon Styling aur Animation (Bina original CSS ko chede)
    const style = document.createElement('style');
    style.innerHTML = `
        #waqas-link-dot {
            position: fixed;
            top: 22px; 
            right: 175px; /* Deposit button ke sath balance wali side par */
            width: 10px;
            height: 10px;
            background-color: #22c55e;
            border-radius: 50%;
            z-index: 99999;
            cursor: pointer;
            display: block;
            box-shadow: 0 0 8px #22c55e, 0 0 15px rgba(34, 197, 94, 0.6);
            border: 1.5px solid rgba(255, 255, 255, 0.3);
            animation: pulse-green-dot 1.5s infinite ease-in-out;
            transition: transform 0.2s;
        }

        #waqas-link-dot:hover {
            transform: scale(1.3);
            box-shadow: 0 0 15px #22c55e, 0 0 25px #22c55e;
        }

        @keyframes pulse-green-dot {
            0% { transform: scale(0.9); opacity: 0.8; }
            50% { transform: scale(1.1); opacity: 1; box-shadow: 0 0 12px #22c55e, 0 0 20px rgba(34, 197, 94, 0.8); }
            100% { transform: scale(0.9); opacity: 0.8; }
        }
    `;
    
    // 3. Elements ko Page mein inject karna
    document.head.appendChild(style);
    document.body.appendChild(greenDot);
})();
