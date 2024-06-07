export default function extractHashtags(hashtagStr: string) {
  const regex =
    /#([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\w]+)/g;
  let matches;
  let hashtags = [];
  while ((matches = regex.exec(hashtagStr)) !== null) {
    hashtags.push(matches[1]);
  }
  return hashtags;
}
