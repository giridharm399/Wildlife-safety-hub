function openDashboard(role) {

    if (role === "department") {
        alert("Forest Department Dashboard selected");
    }

    else if (role === "ranger") {
        alert("Ranger Dashboard selected");
    }

    else if (role === "tourist") {
        alert("Tourist Dashboard selected");
    }
}


function viewRoute() {
    alert("Safe route calculated. Avoid the wildlife activity zone.");
}


function emergencyAlert() {
    alert("Emergency alert sent to the forest department.");
}


function viewAlert() {

    alert(
        "⚠️ SAFETY ALERT\n\n" +
        "Elephant activity detected near your safari route.\n\n" +
        "Please remain inside your vehicle and follow the recommended safe route."
    );
}
function viewSafetyInfo() {

    alert(
        "🦌 SAFARI SAFETY INSTRUCTIONS\n\n" +
        "• Remain inside the safari vehicle.\n" +
        "• Do not approach or feed wildlife.\n" +
        "• Follow the designated safari route.\n" +
        "• Do not enter restricted areas.\n" +
        "• Follow instructions from forest authorities.\n" +
        "• Report any emergency immediately."
    );
}

function setRisk(level) {

    const card = document.getElementById("conflict");
    const badge = document.getElementById("riskBadge");
    const message = document.getElementById("conflictMessage");
    const title = document.getElementById("conflictTitle");
    const details = document.getElementById("conflictDetails");

    // Remove previous risk classes
    card.classList.remove("low-risk", "medium-risk", "high-risk");
    badge.classList.remove("medium", "high");

    // LOW RISK
    if (level === "low") {

        card.classList.add("low-risk");

        badge.textContent = "LOW RISK";

        message.textContent =
            "No active conflict nearby.";

        title.textContent =
            "Area currently monitored";

        details.textContent =
            "Wildlife activity is within normal levels.";
    }

    // MEDIUM RISK
    else if (level === "medium") {

        card.classList.add("medium-risk");
        badge.classList.add("medium");

        badge.textContent = "MEDIUM RISK";

        message.textContent =
            "Increased wildlife activity detected.";

        title.textContent =
            "⚠️ Caution advised";

        details.textContent =
            "Wildlife activity has increased near your safari route. Stay inside the vehicle and follow the recommended route.";
    }

    // HIGH RISK
    else if (level === "high") {

        card.classList.add("high-risk");
        badge.classList.add("high");

        badge.textContent = "HIGH RISK";

        message.textContent =
            "Potential human–wildlife conflict detected.";

        title.textContent =
            "🚨 Immediate caution required";

        details.textContent =
            "A high-risk wildlife incident has been detected near your route. Avoid the affected zone and follow the safe route.";
    }
}