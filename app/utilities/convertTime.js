export default function time (str) {
  const numb = +str;
  if (numb < 60) return (str+"m");
  if (numb >=60) {
    const hr = Math.floor(numb/60);
    const min = numb%60;
    return (hr+"h"+min+"m")
  }
};