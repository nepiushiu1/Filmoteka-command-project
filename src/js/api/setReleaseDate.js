export function setReleaseDate(releaseDate, firstDate) {
  if (releaseDate) {
    return releaseDate.slice(0, 4);
  } else if (firstDate) {
    return firstDate.slice(0, 4);
  }
}

export function setReleaseVote(vote) {
  if (!vote) {
    return 'No vote';
  }
  return vote.toFixed(1);
}
