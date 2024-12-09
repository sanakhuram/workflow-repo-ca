import { CONFIG } from '../../config.js';

export async function getVenues() {
  const url = `${CONFIG.apiUrl}venues`;

  const response = await fetch(url);
  const json = await response.json();
  console.log(json);

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || 'Fetching venues failed');
  }

  return json;
}
