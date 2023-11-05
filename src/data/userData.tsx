export interface UserDetails {
  id: string;
  first_name: string;
  last_name: string;
  role_name: string;
  email: string;
}

export interface UserData {
  access_token: string;
  token_type: string;
  id: string;
  first_name: string;
  last_name: string;
  role_name: string;
  email: string;
  is_otp_enabled: boolean;
}

export interface UserListData {
  total: number;
  page: number;
  per_page: number;
  users: User[];
}

export interface User {
  id: string;
  first_name?: string;
  last_name?: string;
  username: string;
  email: string;
  role: string;
}
