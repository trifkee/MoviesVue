export function getMovieRatingColor(score: number) {
  if (score >= 7) {
    return "#00A36C";
  } else if (score >= 5) {
    return "#ffa500 ";
  } else {
    return "#C41E3A";
  }
}
