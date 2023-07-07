export type MovieDto = {
  title: string;
  year: string;
  plot: string;
  actors: string;
  poster: string;
  ratings: { source: string; value: string }[];
};
