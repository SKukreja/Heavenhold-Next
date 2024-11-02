// utils/getNonce.ts
export async function getNonce(): Promise<string | null> {
    try {
      const response = await fetch('https://api.heavenhold.com/wp-json/custom/v1/nonce', {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        return data.nonce;
      } else {
        console.error('Failed to fetch nonce:', response.status, await response.text());
        return null;
      }
    } catch (error) {
      console.error('Error fetching nonce:', error);
      return null;
    }
  }
  