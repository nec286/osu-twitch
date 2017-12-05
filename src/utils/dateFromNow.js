import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import parse from 'date-fns/parse';

export default function(date, options) {
  return distanceInWordsToNow(parse(date + '+08:00'), options);
}
