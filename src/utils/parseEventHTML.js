export default function(str) {
  const arr = str.split(/\s*(<[^>]*>)/g);
  const img = arr.filter(v => v.match(/<img.+>/));

  // Try to extract the global #rank
  let chunks = str.split('rank #'), globalRank;
  if(chunks.length === 2) {
    globalRank = chunks[1].replace(/(^\d+)(.+$)/i,'$1');
  }

  return {
    droppedFirstPlace: str.includes('has lost first place'),
    globalRank: globalRank,
    rank: !!img[0] && img[0].split('/')[2].split('_')[0]
  };
}
