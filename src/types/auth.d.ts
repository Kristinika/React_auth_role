export type UserRole = "company_admin" | "manager" | "client" | "support";

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  organization: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
