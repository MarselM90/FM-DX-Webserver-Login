(() => {
    const users = { "guest1": "pass1", "guest2": "pass2" };
    const STORAGE_KEY = "authPluginUser";

    function initLogin() {
        const savedUser = localStorage.getItem(STORAGE_KEY);
        if (savedUser && users[savedUser]) return; // user already logged in

        // --- Overlay ---
        const overlay = document.createElement("div");
        Object.assign(overlay.style, {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(10px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            fontFamily: "Arial, sans-serif",
            flexDirection: "column",
            transition: "opacity 0.3s"
        });

        // --- Login Card ---
        const card = document.createElement("div");
        Object.assign(card.style, {
            background: "linear-gradient(135deg, #2a2a2a, #1e1e1e)",
            padding: "35px 45px",
            borderRadius: "15px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
            textAlign: "center",
            color: "white",
            minWidth: "320px",
            animation: "fadeIn 0.5s"
        });

        const title = document.createElement("h2");
        title.innerText = "Login";
        title.style.marginBottom = "15px";
        card.appendChild(title);

        const errorMsg = document.createElement("div");
        Object.assign(errorMsg.style, {
            color: "#ff6b6b",
            height: "22px",
            marginBottom: "15px",
            fontWeight: "bold",
            transition: "all 0.2s"
        });
        card.appendChild(errorMsg);

        // --- Form ---
        const form = document.createElement("form");
        Object.assign(form.style, {
            display: "flex",
            flexDirection: "column",
            gap: "12px"
        });

        const inputUser = document.createElement("input");
        inputUser.placeholder = "Username";
        Object.assign(inputUser.style, {
            padding: "12px 14px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "15px"
        });

        const inputPass = document.createElement("input");
        inputPass.placeholder = "Password";
        inputPass.type = "password";
        Object.assign(inputPass.style, {
            padding: "12px 14px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            fontSize: "15px"
        });

        // --- Remember Me ---
        const rememberLabel = document.createElement("label");
        rememberLabel.style.display = "flex";
        rememberLabel.style.alignItems = "center";
        rememberLabel.style.gap = "7px";
        const rememberCheck = document.createElement("input");
        rememberCheck.type = "checkbox";
        rememberLabel.appendChild(rememberCheck);
        rememberLabel.appendChild(document.createTextNode("Remember Me"));

        const submitBtn = document.createElement("button");
        submitBtn.type = "submit";
        submitBtn.innerText = "Login";
        Object.assign(submitBtn.style, {
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#4caf50",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "all 0.25s"
        });

        submitBtn.addEventListener("mouseenter", () => submitBtn.style.backgroundColor = "#45a049");
        submitBtn.addEventListener("mouseleave", () => submitBtn.style.backgroundColor = "#4caf50");

        form.appendChild(inputUser);
        form.appendChild(inputPass);
        form.appendChild(rememberLabel);
        form.appendChild(submitBtn);

        card.appendChild(form);
        overlay.appendChild(card);
        document.body.appendChild(overlay);

        function checkLogin(username, password) {
            return users[username] && users[username] === password;
        }

        function shakeCard() {
            card.style.animation = "shake 0.4s";
            setTimeout(() => card.style.animation = "fadeIn 0.4s", 400);
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = inputUser.value.trim();
            const password = inputPass.value.trim();

            if (checkLogin(username, password)) {
                if (rememberCheck.checked) localStorage.setItem(STORAGE_KEY, username);
                overlay.style.display = "none";
                console.log(`Login successful: ${username}`);
            } else {
                errorMsg.innerText = "Incorrect username or password!";
                shakeCard();
            }
        });

        inputUser.focus();

        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes fadeIn {
                from {opacity: 0; transform: translateY(-20px);}
                to {opacity: 1; transform: translateY(0);}
            }
            @keyframes shake {
                0% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                50% { transform: translateX(10px); }
                75% { transform: translateX(-10px); }
                100% { transform: translateX(0); }
            }
        `;
        document.head.appendChild(style);
    }

    if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", initLogin);
    } else {
        initLogin();
    }
})();
