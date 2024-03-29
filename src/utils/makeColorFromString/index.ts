function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(integerNum: number) {
  const c = (integerNum & 0x00ffffff).toString(16);

  return '00000'.substring(0, 6 - c.length) + c;
}

export function makeColorFromString(str: string) {
  return '#' + intToRGB(hashCode(str));
}
