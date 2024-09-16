export interface AuthState {
  id: string;
  email: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}
