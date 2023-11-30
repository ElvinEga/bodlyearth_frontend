export interface Company {
  teams: Team[];
  page_info: PageInfo;
}

export interface Team {
  name: string;
  description: string;
  is_suspended: boolean;
  id: string;
  created_at: string;
  updated_at: string;
  member_limit?: number;
}

export interface PageInfo {
  current_page: number;
  page_size: number;
  total_items: number;
  total_pages: number;
}
