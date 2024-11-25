// Function to format the date
export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

export function transformStatKey(stat: string): string {
    let transformedStat = stat
      .toString()
      .replaceAll('(%)', '')
      .replaceAll('(Flat)','flat')
      .replaceAll('x%', 'x')
      .replaceAll('%', 'x')
      .replaceAll(/ /g, "-")
      .replaceAll('[]','')
      .replaceAll(',','')
      .toLowerCase();
    
    while (transformedStat.includes('--')) {
      transformedStat = transformedStat.replaceAll('--', '-');
    }
  
    transformedStat = transformedStat.replace(/^-|-$/g, '');
    
    return transformedStat;
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

// utils/markdownToHtml.js

export default function markdownToHtml(markdown: string) {
    if (!markdown) return '';
  
    let html = markdown;

      // Remove wrapping <p> tags
    html = html.replace(/<\/?p>/g, '\n');

  // Remove <br> tags
    html = html.replace(/<br\s*\/?>/g, '\n');    
    
    // Convert headers
    html = html.replace(/^\s*######\s+(.*)$/gm, '<h6>$1</h6>');
    html = html.replace(/^\s*#####\s+(.*)$/gm, '<h5>$1</h5>');
    html = html.replace(/^\s*####\s+(.*)$/gm, '<h4>$1</h4>');
    html = html.replace(/^\s*###\s+(.*)$/gm, '<h3>$1</h3>');
    html = html.replace(/^\s*##\s+(.*)$/gm, '<h2>$1</h2>');
    html = html.replace(/^\s*#\s+(.*)$/gm, '<h1>$1</h1>');    
  
    // Convert bold text
    html = html.replace(/\*\*(.*?)\*\*/gm, '<strong>$1</strong>');
  
    // Convert italic text
    html = html.replace(/\*(.*?)\*/gm, '<em>$1</em>');
  
    // Convert unordered lists
    html = html.replace(/^\s*[-+*]\s+(.*)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>[\s\S]*?<\/li>)/gm, '<ul>$1</ul>');
  
    // Convert blockquotes
    html = html.replace(/^>\s+(.*)$/gm, '<blockquote>$1</blockquote>');
  
    // Convert horizontal rules
    html = html.replace(/^---$/gm, '<hr />');
  
    // Convert code blocks
    html = html.replace(/```([\s\S]*?)```/gm, '<pre><code>$1</code></pre>');
  
    // Convert inline code
    html = html.replace(/`([^`]+)`/gm, '<code>$1</code>');
  
    // Convert links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gm, '<a href="$2">$1</a>');
  
    // Convert paragraphs
    html = html.replace(/^\s*(\S[^\n]*)\n?/gm, '<p>$1</p>');

    html = html.replace(/^\s*—+\s*$/gm, '');
  
    return html.trim();
  }
  
  