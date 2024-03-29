export function invertColor(hexColor: string) {
  if (hexColor[0] !== '#')
    throw new Error('Wrong hex color string format (missing "#" at the start): ' + hexColor);

  const slicedHex = hexColor.slice(1);

  return '#' + (Number(`0x1${slicedHex}`) ^ 0xffffff).toString(16).substr(1);
}
