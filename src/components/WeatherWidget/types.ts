// see documentation at https://www.metaweather.com/api/
export type WeatherDatum = {
  air_pressure: number;
  applicable_date: Date;
  created: Date;
  humidity: number;
  id: number;
  max_temp: number;
  min_temp: number;
  predictability: number;
  the_temp: number; // in celsius
  visibility: number;
  weather_state_abbr: string;
  weather_state_name: string;
  wind_direction: number;
  wind_direction_compass: string;
  wind_speed: number;
};

export type WeatherResponse = {
  consolidated_weather: WeatherDatum[];
};
