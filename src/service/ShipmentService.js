export async function getShipments() {
    const response = await fetch("https://marketplace.jeberhardt.dev/contracts", {
        mode: "no-cors",
    });
    return await response.json();
}