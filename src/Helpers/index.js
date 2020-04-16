export function stz(str) {
  return str.toLowerCase();
}

export function pYear(str) {
  return new Date(str).getFullYear();
}

export function dDate(str) {
  return new Date(str).toDateString();
}
