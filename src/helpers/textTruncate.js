export const textTruncate = (text, length) => {
  if (text.length <= length) {
    return text;
  } else {
    return text.substring(0, length) + " ...";
  }
};
