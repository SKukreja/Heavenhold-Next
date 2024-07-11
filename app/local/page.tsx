import { headers } from "next/headers";

export default async function LocalPage(): Promise<JSX.Element> {
  const headersInstance = headers();
  const country = headersInstance.get("wpe-headless-country") || "No country data";
  const region = headersInstance.get("wpe-headless-region") || "No region data";
  const timezone = headersInstance.get("wpe-headless-timezone") || "No timezone data";

  return (
    <div>
      <h1>Geolocation Data</h1>
      <p>Country: {country}</p>
      <p>Region: {region}</p>
      <p>Timezone: {timezone}</p>
    </div>
  );
}
