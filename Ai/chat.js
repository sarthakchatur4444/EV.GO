const chatBox = document.getElementById("chat");
const inputField = document.getElementById("Search-Bar");
const sendBtn = document.getElementById("arrow-up");

function addMessage(message, sender) {
    const div = document.createElement("div");
    div.className = sender === "user"
        ? "self-end bg-cyan-400 text-black px-4 py-2 rounded-xl max-w-[75%]"
        : "self-start bg-gray-200 text-black px-4 py-2 rounded-xl max-w-[75%]";
    div.innerText = message;
    chatBox.prepend(div);
}

function typeMessage(text) {
    const div = document.createElement("div");
    div.className = "self-start bg-gray-200 text-black px-4 py-2 rounded-xl max-w-[75%]";
    chatBox.prepend(div);

    let index = 0;

    function typing() {
        if (index < text.length) {
            div.innerHTML += text.charAt(index); // keeps spaces automatically
            index++;
            setTimeout(typing, Math.random() * 80 + 10);
        }
    }

    typing();
}

function getBotResponse(userInput) {
    const text = userInput.toLowerCase();

    // EVO 10S
    if (text.includes("evo 10s")) {
        if (text.includes("price"))
            return "EVO 10S price is ₹1,01,999. EMI starts at ₹3,299.";
        if (text.includes("speed"))
            return "EVO 10S top speed is 100 km/h.";
        if (text.includes("range"))
            return "EVO 10S certified range is 80 km.";
        return "EVO 10S: 8kW peak power, 7.5hrs charging, Smart Key, 4yrs warranty.";
    }

    // EVO 20A
    if (text.includes("evo 20a")) {
        if (text.includes("price"))
            return "EVO 20A price is ₹1,21,999. EMI starts at ₹4,299.";
        if (text.includes("speed"))
            return "EVO 20A top speed is 150 km/h.";
        if (text.includes("range"))
            return "EVO 20A certified range is 85 km.";
        return "EVO 20A: 10kW peak power, Sports mode, 8.5hrs charging, 4yrs warranty.";
    }

    // EVO 50X
    if (text.includes("evo 50x")) {
        if (text.includes("price"))
            return "EVO 50X price is ₹1,35,999. EMI starts at ₹3,500.";
        if (text.includes("speed"))
            return "EVO 50X top speed is 150 km/h.";
        if (text.includes("range"))
            return "EVO 50X certified range is 100 km.";
        return "EVO 50X: 15kW peak power, Hyper mode, 10hrs charging, Mobile Key support.";
    }

    // EVO GEN+
    if (text.includes("evo gen+")) {
        return "EVO GEN+ offers 320 km range and 141 km/h top speed. It is our most powerful scooter.";
    }

    // Features
    if (text.includes("features"))
        return "Features include Digital Dashboard, Powerful Motor, Hidden Battery, LED Headlight, Terrain Tires, Smart App & Bluetooth Connectivity.";

    if (text.includes("battery"))
        return "Hidden battery design with 4 years warranty. EVO PowerPod can power your home.";

    if (text.includes("charging"))
        return "Charging time varies between 7.5 to 10 hours depending on model.";

    if (text.includes("loan") || text.includes("finance"))
        return "Loans available starting at 12% per annum. Easy EMI options available.";

    if (text.includes("store") || text.includes("location"))
        return "We have EV.GO stores in Kalyan and Nashik, Maharashtra.";

    if (text.includes("hypercharger"))
        return "EV.GO Hypercharger available near CSMT and Navi Mumbai.";

    if (text.includes("app"))
        return "EV.GO rental scooter app is coming soon to Play Store and App Store.";

    if (text.includes("future"))
        return "Future EV.GO bikes will be lighter, smarter, AI-powered and eco-friendly.";

    return "Please ask questions related to EV.GO products, pricing, features, stores or financing.";
}

function sendMessage() {
    const message = inputField.value.trim();
    if (message === "") return;

    addMessage(message, "user");
    const reply = getBotResponse(message);

    setTimeout(() => {
        typeMessage(reply);
    }, 400);

    inputField.value = "";
}
sendBtn.addEventListener("click", sendMessage);
inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // prevents default form behaviour
        sendMessage();
    }
});