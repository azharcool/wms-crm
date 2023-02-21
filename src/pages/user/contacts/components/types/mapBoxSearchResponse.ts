export interface SearchResponseRoot {
  type: string;
  query: string[];
  features: IFeature[];
  attribution: string;
}

export interface IFeature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: IProperties;
  text_en: string;
  language_en?: string;
  place_name_en: string;
  text: string;
  language?: string;
  place_name: string;
  bbox?: number[];
  center: number[];
  geometry: IGeometry;
  context: IContext[];
}

export interface IProperties {
  wikidata?: string;
  accuracy?: string;
}

export interface IGeometry {
  type: string;
  coordinates: number[];
}

export interface IContext {
  id: string;
  wikidata?: string;
  text_en: string;
  language_en?: string;
  text: string;
  language?: string;
  short_code?: string;
}
