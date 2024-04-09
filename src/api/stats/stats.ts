import axios from 'axios';

export async function APIStats(key: string,noUsers: boolean): Promise<object> {
   const response = await axios.get(`https://api.luarmor.net/v3/keys/${key}/stats?noUsers=${noUsers}`, { headers: {'Content-Type': 'application/json'}})
   return response.data;
}