export interface RiskDataById {
  id: string;
  user_id: string;
  search_date: string;
  debtor_name: string;
  debtor_contacts: string;
  crop: string;
  startDate: string;
  endDate: string;
  latitude: number;
  longitude: number;
  reviewer_comments: string;
  composite_total_score: number;
  composite_total_risk: number;
  climate_scores: ClimateScores;
  soil_scores: SoilScores;
  water_scores: WaterScores;
  adaptations: Adaptations;
}

export interface RiskData {
  total_scores: TotalScores;
  location_score_id: LocationScoreId;
}

export interface LocationScoreId {
  message: string;
  location_score_id: string;
}

export interface TotalScores {
  climate_scores: ClimateScores;
  soil_scores: SoilScores;
  water_scores: WaterScores;
  composite_total_score: number;
  composite_total_risk: number;
  adaptations: Adaptations;
}

export interface ClimateScores {
  rainfall_score: number;
  aridity_score: number;
  drought_score: number;
  composite_climate_score: number;
  rainfall_risk: number;
  aridity_risk: number;
  drought_risk: number;
  composite_climate_risk: number;
  drought_raw_data: DroughtRawData;
  rainfall_raw_data: RainfallRawData;
  aridity_raw_data: number;
}

export interface DroughtRawData {
  value_at_location: number;
  category: string;
  percentage: number;
}

export interface RainfallRawData {
  value_at_location: number;
  optimal_range: OptimalRange;
  absolute_range: AbsoluteRange;
  rank: string;
  percentage: number;
}

export interface OptimalRange {
  lowest_optimal_value: number;
  highest_optimal_value: number;
}

export interface AbsoluteRange {
  lowest_absolute_value: number;
  highest_absolute_value: number;
}

export interface TemperatureRawData {
  value_at_location: number;
  optimal_range: OptimalRange2;
  absolute_range: AbsoluteRange2;
  rank: string;
  percentage: number;
}

export interface OptimalRange2 {
  lowest_optimal_value: number;
  highest_optimal_value: number;
}

export interface AbsoluteRange2 {
  lowest_absolute_value: number;
  highest_absolute_value: number;
}

export interface SoilScores {
  soil_cation_exchange_capacity: number;
  soil_organic_carbon: number;
  soil_ph_score: number;
  composite_soil_score: number;
  soil_ph_risk: number;
  cation_exchange_capacity_risk: number;
  soil_organic_carbon_risk: number;
  composite_soil_risk: number;
  soil_ph_raw_data: SoilPhRawData;
}

export interface SoilPhRawData {
  value_at_location: number;
  optimal_range: OptimalRange3;
  absolute_range: AbsoluteRange3;
  rank: string;
  percentage: number;
}

export interface OptimalRange3 {
  lowest_optimal_value: number;
  highest_optimal_value: number;
}

export interface AbsoluteRange3 {
  lowest_absolute_value: number;
  highest_absolute_value: number;
}

export interface WaterScores {
  ground_water_score: number;
  rainfall_erosivity_score: number;
  location_aquaduct_score: number;
  composite_water_score: number;
  ground_water_risk: number;
  rainfall_erosivity_risk: number;
  location_aquaduct_risk: number;
  composite_water_risk: number;
}

export interface Adaptations {
  "1": N1;
  "2": N2;
  "3": N3;
  "4": N4;
  "5": N5;
  "6": N6;
}

export interface N1 {
  Pillar: string;
  Index: string;
  Suggestion: string;
}

export interface N2 {
  Pillar: string;
  Index: string;
  Suggestion: string;
}

export interface N3 {
  Pillar: string;
  Index: string;
  Suggestion: string;
}

export interface N4 {
  Pillar: string;
  Index: string;
  Suggestion: string;
}

export interface N5 {
  Pillar: string;
  Index: string;
  Suggestion: string;
}

export interface N6 {
  Pillar: string;
  Index: string;
  Suggestion: string;
}
