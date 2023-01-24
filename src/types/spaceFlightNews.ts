export type NewsProperties = {
  title: string;
  summary: string;
  publishedAt: Date | string;
  url: string;
  imageUrl: string;
  id: string;
};

export type SearchOptions = {
  limit?: number;
  search?: string;
};

export type DetailsFlightProperties = Partial<NewsProperties> & {
  variant?: string;
  onOpen?: () => void;
};

export type SpaceFlightDetailsProperties = {
  spaceFlight: NewsProperties;
  isInverted: boolean;
};
