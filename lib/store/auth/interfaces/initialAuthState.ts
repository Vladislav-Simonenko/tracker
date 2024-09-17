export interface AuthState {
  id: string;
  email: string | null;
  access_token: string | null;
  refresh_token: string | null;
}
