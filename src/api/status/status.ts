import axios from 'axios';

export async function APIStatus(): Promise<object> {
   const response = await axios.get(' https://api.luarmor.net/status', { headers: {'Content-Type': 'application/json'}})
   return response.data;
}