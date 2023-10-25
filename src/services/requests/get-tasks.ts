import apiClients from "../api-clients";

export interface GetTasksResponse {
  id: number;
  name: string;
  description: string;
  deadline: string;
  priority: number;
  attachment: string;
  thumbnail: string;
  order: number;
  members: string;
  created_at: string;
}



export const getTasks = (workspaceid: number, projectid: number, boardid: number): Promise<GetTasksResponse[]> =>
  apiClients.get(`/workspaces/${workspaceid}/projects/${projectid}/boards/${boardid}/tasks/}`).then(res => res.data)