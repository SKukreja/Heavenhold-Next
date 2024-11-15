// Function to format the date
export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

export async function getIpAddress(): Promise<string> {
    const cacheKey = "cachedIpAddress";
    const cacheDuration = 5 * 60 * 1000; // Cache for 5 minutes

    if (typeof window !== "undefined") { // Check if it's running in the browser
        const cachedData = sessionStorage.getItem(cacheKey);
        if (cachedData) {
            const { ip, timestamp } = JSON.parse(cachedData);
            if (Date.now() - timestamp < cacheDuration) {
                return ip;
            }
        }

        try {
            const response = await fetch("/api/getIpAddress");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            sessionStorage.setItem(cacheKey, JSON.stringify({ ip: data.ip, timestamp: Date.now() }));
            return data.ip;
        } catch (error) {
            console.error("Error fetching IP address:", error);
            return "192.168.201.1"; // Fallback IP address
        }
    } else {
        // If this function is called on the server, provide a fallback
        console.error("getIpAddress should only be called client-side.");
        return "192.168.201.1";
    }
}
