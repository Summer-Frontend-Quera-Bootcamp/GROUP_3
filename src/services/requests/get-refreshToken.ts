import apiClients from "../api-clients";
import { EndPoints } from "../endpoints";

export interface GetRefreshTokenRequest {
  refresh: string;
}

export interface GetRefreshTokenResponse {
  access: string;
}

export const getRefreshToken = (data: GetRefreshTokenRequest): Promise<GetRefreshTokenResponse> =>
  apiClients.post("/accounts/refresh/", data).then(res => res.data);