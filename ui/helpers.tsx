// Function to format the date
export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Function to get user's IP address for vote tracking
export async function getIpAddress(): Promise<string> {
  const delay = 2000;
  let timeoutId: NodeJS.Timeout;
  let cachedPromise: Promise<string> | null = null;

  return new Promise<string>((resolve) => {
      if (cachedPromise) {
          resolve(cachedPromise);
          return;
      }

      clearTimeout(timeoutId);
      timeoutId = setTimeout(async () => {
          cachedPromise = (async () => {
              try {
                  const response = await fetch("/api/getIpAddress");
                  if (!response.ok) {
                      throw new Error(`HTTP error! status: ${response.status}`);
                  }
                  const data = await response.json();
                  return data.ip;
              } catch (error) {
                  console.error("Error fetching IP address:", error);
                  return "192.168.201.1"; // Fallback IP address
              }
          })();
          resolve(cachedPromise);
      }, delay);
  });
}
