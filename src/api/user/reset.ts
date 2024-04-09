import axios from "axios";
 
export async function ResetUserHWID(
    key: string,
    project_id: string,
    user_key: string,
    force?: boolean
){
    const request = await axios.post(` https://api.luarmor.net/v3/projects/${project_id}/users/resethwid`, { user_key, force}, { headers: { Authorization: key}})
    return request.data
}