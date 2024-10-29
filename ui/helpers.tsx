// Function to format the date
export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

export async function getIpAddress(): Promise<string> {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.ip; // Return the fetched IP address
    } catch (error) {
      console.error("Error fetching IP address:", error);
      return "192.168.201.1"; // Fallback IP address
    }
  }