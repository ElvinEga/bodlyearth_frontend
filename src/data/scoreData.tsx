export interface ScoreData {
  scores: Score[];
  total_count: number;
  page: number;
  items_per_page: number;
}

export interface Score {
  score_id: string;
  search_date: string;
  crop: string;
  latitude: number;
  longitude: number;
  composite_total_score: number;
  composite_total_risk: number;
}
