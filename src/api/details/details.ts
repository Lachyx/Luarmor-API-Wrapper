import axios from 'axios';

export async function APIDetails(key: string) {
    const response = await axios.get(`https://api.luarmor.net/v3/keys/${key}/details`, { headers: { 'Content-Type': 'application/json' }});
    return response.data;
}