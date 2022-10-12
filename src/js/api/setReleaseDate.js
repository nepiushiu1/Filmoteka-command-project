export function setReleaseDate(releaseDate) {
  if (!releaseDate) {
    return 'No data';
  } else return releaseDate.slice(0, 4);
}

export function setReleaseVote(vote) {
  if (!vote) {
    return 'No vote';
  }
  return vote.toFixed(1);
}
