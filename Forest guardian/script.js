// ==========================================
// DASHBOARD NAVIGATION
// ==========================================

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


// ==========================================
// VIEW SAFE ROUTE
// ==========================================

function viewRoute() {

    const bookingSelect =
        document.getElementById("bookingSelect");

    if (!bookingSelect || !window.safaris) {

        alert(
            "Safari route information is not available yet."
        );

        return;
    }

    const selectedBooking =
        bookingSelect.value;

    const safari =
        window.safaris.find(function(s) {
            return s.booking_id === selectedBooking;
        });

    if (!safari) {

        alert(
            "Safari route information could not be found."
        );

        return;
    }

    alert(
        "🗺️ SAFE ROUTE\n\n" +

        "From: " +
        safari.start_place +
        "\n\n" +

        "To: " +
        safari.destination_place +
        "\n\n" +

        "Route Status: " +
        safari.route_status +
        "\n\n" +

        "Please follow the designated route " +
        "and instructions from your safari guide."
    );
}


// ==========================================
// EMERGENCY ALERT
// ==========================================

function emergencyAlert() {

    const bookingSelect =
        document.getElementById("bookingSelect");

    if (!bookingSelect || !window.safaris) {

        alert(
            "Unable to send emergency alert. " +
            "Safari information is not available."
        );

        return;
    }

    const selectedBooking =
        bookingSelect.value;

    const safari =
        window.safaris.find(function(s) {
            return s.booking_id === selectedBooking;
        });

    if (!safari) {

        alert(
            "Unable to identify your safari booking."
        );

        return;
    }

    const confirmed =
        confirm(
            "🚨 EMERGENCY ALERT\n\n" +

            "Send an emergency alert for booking " +
            safari.booking_id +
            "?\n\n" +

            "Only use this feature in a genuine emergency."
        );

    if (!confirmed) {
        return;
    }

    alert(
        "🚨 EMERGENCY ALERT SENT\n\n" +

        "Booking: " +
        safari.booking_id +
        "\n" +

        "Vehicle: " +
        safari.vehicle_id +
        "\n\n" +

        "The forest department has been notified.\n\n" +

        "Please remain inside the vehicle and " +
        "follow instructions from your guide."
    );

    console.log(
        "EMERGENCY ALERT:",
        {
            booking_id: safari.booking_id,
            vehicle_id: safari.vehicle_id,
            time: new Date().toLocaleString()
        }
    );
}


// ==========================================
// SAFETY ALERT
// ==========================================

function viewAlert() {

    alert(
        "⚠️ SAFETY ALERT\n\n" +

        "A safety concern has been detected " +
        "in your safari area.\n\n" +

        "Please remain inside your vehicle " +
        "and follow the recommended route."
    );
}


// ==========================================
// SAFETY INFORMATION
// ==========================================

function viewSafetyInfo() {

    alert(
        "🛡️ SAFARI SAFETY INSTRUCTIONS\n\n" +

        "• Remain inside the safari vehicle.\n" +
        "• Do not approach or feed wildlife.\n" +
        "• Follow the designated safari route.\n" +
        "• Do not enter restricted areas.\n" +
        "• Follow instructions from forest authorities.\n" +
        "• Report any emergency immediately."
    );
}


// ==========================================
// CONFLICT RISK CARD
// ==========================================

function setRisk(level) {

    const card =
        document.getElementById("conflict");

    const badge =
        document.getElementById("riskBadge");

    const message =
        document.getElementById("conflictMessage");

    const title =
        document.getElementById("conflictTitle");

    const details =
        document.getElementById("conflictDetails");

    if (
        !card ||
        !badge ||
        !message ||
        !title ||
        !details
    ) {
        return;
    }

    card.classList.remove(
        "low-risk",
        "medium-risk",
        "high-risk"
    );

    badge.classList.remove(
        "medium",
        "high"
    );


    // LOW RISK

    if (level === "low") {

        card.classList.add("low-risk");

        badge.textContent =
            "LOW RISK";

        message.textContent =
            "Area currently monitored.";

        title.textContent =
            "Area currently safe";

        details.textContent =
            "Continue your safari while following " +
            "the designated route and safety instructions.";
    }


    // MEDIUM RISK

    else if (level === "medium") {

        card.classList.add("medium-risk");

        badge.classList.add("medium");

        badge.textContent =
            "MEDIUM RISK";

        message.textContent =
            "Increased safety precautions advised.";

        title.textContent =
            "⚠️ Caution advised";

        details.textContent =
            "Please remain inside the vehicle and " +
            "follow the recommended route and " +
            "instructions from your safari guide.";
    }


    // HIGH RISK

    else if (level === "high") {

        card.classList.add("high-risk");

        badge.classList.add("high");

        badge.textContent =
            "HIGH RISK";

        message.textContent =
            "Safari access is currently restricted.";

        title.textContent =
            "🚨 Please follow safety instructions";

        details.textContent =
            "The current safari area requires additional caution. " +
            "Remain with your vehicle and follow instructions " +
            "from your guide and forest authorities.";
    }
}


// ==========================================
// UPDATE RECENT ALERTS
// ==========================================

function updateRecentAlerts(safari) {

    const alertHistory =
        document.getElementById("alertHistory");

    if (!alertHistory || !safari) {
        return;
    }


    // Start with an empty alert list

    const alerts = [];


    // ------------------------------------------
    // SAFETY STATUS ALERT
    // ------------------------------------------

    if (safari.safety_status === "Safe") {

        alerts.push({
            icon: "✅",
            title: "Safety Check",
            message:
                "Your safari is currently marked safe.",
            time: "Now"
        });

    }

    else if (
        safari.safety_status ===
        "Animal Activity Nearby"
    ) {

        alerts.push({
            icon: "⚠️",
            title: "Safety Advisory",
            message:
                "Additional safety precautions are advised for your safari.",
            time: "Now"
        });

    }

    else if (
        safari.safety_status ===
        "Route Review"
    ) {

        alerts.push({
            icon: "🛣️",
            title: "Route Advisory",
            message:
                "Your safari route requires additional review.",
            time: "Now"
        });

    }

    else if (
        safari.safety_status ===
        "Restricted"
    ) {

        alerts.push({
            icon: "🚨",
            title: "Access Advisory",
            message:
                "Access restrictions are currently active for this safari.",
            time: "Now"
        });
    }


    // ------------------------------------------
    // WILDLIFE ALERT
    // ------------------------------------------

    if (
        safari.wildlife_alert &&
        safari.wildlife_alert.toLowerCase() === "yes"
    ) {

        alerts.push({
            icon: "⚠️",
            title: "Wildlife Safety Advisory",
            message:
                "Recent wildlife activity requires increased caution.",
            time: "Recent"
        });

    } else {

        alerts.push({
            icon: "🛡️",
            title: "Safety Monitoring",
            message:
                "Your safari area is being monitored for safety.",
            time: "Recent"
        });
    }


    // ------------------------------------------
    // ROUTE STATUS
    // ------------------------------------------

    if (
        safari.route_status &&
        safari.route_status !== ""
    ) {

        alerts.push({
            icon: "🗺️",
            title: "Route Advisory",
            message:
                "Please verify and follow the recommended safari route.",
            time: "Recent"
        });
    }


    // ------------------------------------------
    // DISPLAY ALERTS
    // ------------------------------------------

    alertHistory.innerHTML = "";


    alerts.forEach(function(alert) {

        const item =
            document.createElement("div");

        item.className =
            "history-item";


        item.innerHTML =

            "<div>" +

            "<strong>" +
            alert.icon +
            " " +
            alert.title +
            "</strong>" +

            "<span>" +
            alert.message +
            "</span>" +

            "</div>" +

            "<small>" +
            alert.time +
            "</small>";


        alertHistory.appendChild(item);
    });
}


// ==========================================
// DISPLAY SAFARI
// ==========================================

function displaySafari(safari) {

    if (!safari) {
        return;
    }


    console.log(
        "DISPLAYING SAFARI:",
        safari.booking_id,
        safari.safety_status
    );


    const safariZone =
        document.getElementById("safariZone");

    const safariStatus =
        document.getElementById("safariStatus");

    const currentSafetyStatus =
        document.getElementById("currentSafetyStatus");

    const conflictRiskStatus =
        document.getElementById("conflictRiskStatus");

    const restrictedAreaStatus =
        document.getElementById("restrictedAreaStatus");

    const safariDate =
        document.getElementById("safariDate");

    const safariTime =
        document.getElementById("safariTime");

    const safariVehicle =
        document.getElementById("safariVehicle");

    const safariBooking =
        document.getElementById("safariBooking");

    const safetyAdvisory =
        document.getElementById("safetyAdvisory");


    // ==========================================
    // SAFARI DETAILS
    // ==========================================

    if (safariZone) {

        safariZone.textContent =
            safari.safari_range;
    }

    if (safariDate) {

        safariDate.textContent =
            safari.booking_date;
    }

    if (safariTime) {

        safariTime.textContent =
            safari.start_time;
    }

    if (safariVehicle) {

        safariVehicle.textContent =
            safari.vehicle_id;
    }

    if (safariBooking) {

        safariBooking.textContent =
            safari.booking_id;
    }


    // ==========================================
    // SAFARI STATUS
    // ==========================================

    if (safariStatus) {

        safariStatus.classList.remove(
            "safe",
            "caution",
            "review",
            "restricted"
        );


        if (safari.safety_status === "Safe") {

            safariStatus.textContent =
                "● Safe";

            safariStatus.classList.add(
                "safe"
            );

        }

        else if (
            safari.safety_status ===
            "Animal Activity Nearby"
        ) {

            safariStatus.textContent =
                "● Caution";

            safariStatus.classList.add(
                "caution"
            );

        }

        else if (
            safari.safety_status ===
            "Route Review"
        ) {

            safariStatus.textContent =
                "● Route Review";

            safariStatus.classList.add(
                "review"
            );

        }

        else if (
            safari.safety_status ===
            "Restricted"
        ) {

            safariStatus.textContent =
                "● Restricted";

            safariStatus.classList.add(
                "restricted"
            );

        }

        else {

            safariStatus.textContent =
                "● Check Safety Status";
        }
    }


    // ==========================================
    // CURRENT SAFETY STATUS
    // ==========================================

    if (currentSafetyStatus) {

        currentSafetyStatus.classList.remove(
            "safe",
            "caution",
            "review",
            "restricted"
        );


        if (safari.safety_status === "Safe") {

            currentSafetyStatus.textContent =
                "SAFE";

            currentSafetyStatus.classList.add(
                "safe"
            );

        }

        else if (
            safari.safety_status ===
            "Animal Activity Nearby"
        ) {

            currentSafetyStatus.textContent =
                "CAUTION";

            currentSafetyStatus.classList.add(
                "caution"
            );

        }

        else if (
            safari.safety_status ===
            "Route Review"
        ) {

            currentSafetyStatus.textContent =
                "ROUTE REVIEW";

            currentSafetyStatus.classList.add(
                "review"
            );

        }

        else if (
            safari.safety_status ===
            "Restricted"
        ) {

            currentSafetyStatus.textContent =
                "RESTRICTED";

            currentSafetyStatus.classList.add(
                "restricted"
            );

        }

        else {

            currentSafetyStatus.textContent =
                "CHECK STATUS";
        }
    }


    // ==========================================
    // CONFLICT RISK
    // ==========================================

    if (conflictRiskStatus) {

        const activeConflicts =
            window.conflicts.filter(
                function(conflict) {

                    return (
                        conflict.status === "Open" ||
                        conflict.status === "Under Review"
                    );
                }
            );


        const criticalConflicts =
            activeConflicts.filter(
                function(conflict) {

                    return (
                        conflict.severity === "Critical"
                    );
                }
            );


        const highConflicts =
            activeConflicts.filter(
                function(conflict) {

                    return (
                        conflict.severity === "High"
                    );
                }
            );


        if (criticalConflicts.length > 0) {

            conflictRiskStatus.textContent =
                "High";

        }

        else if (
            highConflicts.length > 0
        ) {

            conflictRiskStatus.textContent =
                "Moderate";

        }

        else {

            conflictRiskStatus.textContent =
                "Low";
        }
    }


    // ==========================================
    // RESTRICTED AREA
    // ==========================================

    if (restrictedAreaStatus) {

        if (
            safari.safety_status ===
            "Restricted"
        ) {

            restrictedAreaStatus.textContent =
                "Restricted";

        }

        else if (
            safari.safety_status ===
            "Route Review"
        ) {

            restrictedAreaStatus.textContent =
                "Review Required";

        }

        else {

            restrictedAreaStatus.textContent =
                "None Nearby";
        }
    }


    // ==========================================
    // SAFETY ADVISORY
    // ==========================================

    if (safetyAdvisory) {

        const paragraph =
            safetyAdvisory.querySelector("p");

        let message = "";


        if (
            safari.safety_status ===
            "Safe"
        ) {

            message =
                "Area is currently considered safe. " +
                "Continue your safari and follow the " +
                "designated route.";

        }

        else if (
            safari.safety_status ===
            "Animal Activity Nearby"
        ) {

            message =
                "Increased safety precautions are " +
                "advised in the surrounding area. " +
                "Remain inside the vehicle and follow " +
                "the recommended route.";

        }

        else if (
            safari.safety_status ===
            "Route Review"
        ) {

            message =
                "Your safari route requires review. " +
                "Please follow instructions from your " +
                "guide and use the recommended route.";

        }

        else if (
            safari.safety_status ===
            "Restricted"
        ) {

            message =
                "This area currently has restricted access. " +
                "Please follow instructions from forest " +
                "authorities and your safari guide.";

        }

        else {

            message =
                "Please follow the instructions of your " +
                "safari guide and forest authorities.";
        }


        if (paragraph) {

            paragraph.textContent =
                message;
        }
    }


    // ==========================================
    // CONFLICT CARD
    // ==========================================

    if (
        safari.safety_status ===
        "Safe"
    ) {

        setRisk("low");

    }

    else if (
        safari.safety_status ===
        "Animal Activity Nearby" ||
        safari.safety_status ===
        "Route Review"
    ) {

        setRisk("medium");

    }

    else if (
        safari.safety_status ===
        "Restricted"
    ) {

        setRisk("high");

    }

    else {

        setRisk("low");
    }


    // ==========================================
    // RECENT ALERTS
    // ==========================================

    updateRecentAlerts(safari);
}


// ==========================================
// LOAD CSV
// ==========================================

async function loadCSV(filePath) {

    try {

        const response =
            await fetch(filePath);


        if (!response.ok) {

            throw new Error(
                "Could not load " +
                filePath +
                " (" +
                response.status +
                ")"
            );
        }


        const text =
            await response.text();


        const lines =
            text.trim().split(/\r?\n/);


        if (!lines.length) {
            return [];
        }


        const headers =
            lines[0]
                .split(",")
                .map(function(header) {
                    return header.trim();
                });


        const data =
            lines.slice(1).map(function(line) {

                const values =
                    line.split(",");

                const row = {};


                headers.forEach(
                    function(header, index) {

                        row[header] =
                            values[index]
                                ? values[index].trim()
                                : "";
                    }
                );


                return row;
            });


        console.log(
            "Loaded:",
            filePath,
            data
        );


        return data;


    } catch (error) {

        console.error(
            "Error loading CSV:",
            error
        );

        return [];
    }
}


// ==========================================
// LOAD ALL DATA
// ==========================================

Promise.all([

    loadCSV(
        "../../data/wildlife gurdian - Animals.csv"
    ),

    loadCSV(
        "../../data/wildlife gurdian - Conflict incidents.csv"
    ),

    loadCSV(
        "../../data/wildlife gurdian - safari real routes.csv"
    )

])


.then(function(results) {

    const animals =
        results[0];

    const conflicts =
        results[1];

    const safaris =
        results[2];


    console.log(
        "ANIMAL SIGHTINGS:",
        animals
    );

    console.log(
        "CONFLICT INCIDENTS:",
        conflicts
    );

    console.log(
        "SAFARI DATA:",
        safaris
    );


    // Make data globally available

    window.animals =
        animals;

    window.conflicts =
        conflicts;

    window.safaris =
        safaris;


    // ==========================================
    // BOOKING SELECTOR
    // ==========================================

    if (safaris.length > 0) {

        const bookingSelect =
            document.getElementById(
                "bookingSelect"
            );


        if (bookingSelect) {

            bookingSelect.innerHTML =
                "";


            safaris.forEach(
                function(safari) {

                    const option =
                        document.createElement(
                            "option"
                        );


                    option.value =
                        safari.booking_id;


                    option.textContent =
                        safari.booking_id +
                        " - " +
                        safari.safari_range +
                        " - " +
                        safari.start_time;


                    bookingSelect.appendChild(
                        option
                    );
                }
            );


            bookingSelect.addEventListener(
                "change",
                function() {

                    const selectedBooking =
                        bookingSelect.value;


                    const selectedSafari =
                        safaris.find(
                            function(safari) {

                                return (
                                    safari.booking_id ===
                                    selectedBooking
                                );
                            }
                        );


                    if (selectedSafari) {

                        displaySafari(
                            selectedSafari
                        );
                    }
                }
            );
        }


        // Select first booking

        const firstSafari =
            safaris[0];


        if (bookingSelect) {

            bookingSelect.value =
                firstSafari.booking_id;
        }


        displaySafari(
            firstSafari
        );


    } else {

        console.warn(
            "No safari records found."
        );


        const bookingSelect =
            document.getElementById(
                "bookingSelect"
            );


        if (bookingSelect) {

            bookingSelect.innerHTML =
                "<option value=''>" +
                "No bookings available" +
                "</option>";
        }
    }

})


.catch(function(error) {

    console.error(
        "Error processing CSV data:",
        error
    );

});
// ==========================================
// TOURIST PROFILE
// ==========================================

function showProfile() {

    alert(
        "👤 TOURIST PROFILE\n\n" +
        "Role: Safari Visitor\n\n" +
        "Forest Guardian Safari Safety Assistant\n\n" +
        "Your booking and safety information " +
        "is being monitored during your safari."
    );
}