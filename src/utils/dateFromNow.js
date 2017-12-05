import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

export default function(date, options) {
  return distanceInWordsToNow(new Date(date + ' UTC+8'), options);
}
