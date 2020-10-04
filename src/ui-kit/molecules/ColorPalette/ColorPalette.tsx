import React, { useEffect, useState } from 'react';
import { Range } from 'ui-kit/atoms';
import { View } from './View';
import * as Styled from './styled';
import { fromHSLToHex, fromHEXtoHSL } from 'utils';
import { IColorPickerProps } from './types';

function makeBackgroundParamsString(colorsAmount: number, create: (i: number) => string) {
  const colorsList: string[] = [];

  for (let i = 0; i < colorsAmount; i++) {
    colorsList.push(`hsl(${create(i)})`);
  }

  return makeGradientParamString(colorsList);
}

function makeGradientParamString(colorsList: string[]) {
  return `linear-gradient(to right, ${colorsList.join(', ')})`;
}

const makeHueSliderBackground = () => makeBackgroundParamsString(360, (i) => `${i + 1}, 100%, 50%`);

const makeSaturationSliderBackground = (colorValue: number) =>
  makeBackgroundParamsString(100, (i) => `${colorValue}, ${i}%, 50%`);

const makeBrightnessSliderBackground = (colorValue: number) =>
  makeBackgroundParamsString(100, (i) => `${colorValue}, 100%, ${i}%`);

export const ColorPalette: React.FC<IColorPickerProps> = ({ initValue, onChange }) => {
  const [initHue, initSaturation, initBrightness] = fromHEXtoHSL(initValue);

  const [hue, setColor] = useState(initHue);
  const [saturation, setSaturation] = useState(initSaturation);
  const [lightness, setBrightness] = useState(initBrightness);

  useEffect(() => {
    onChange(fromHSLToHex(hue, saturation, lightness));
  }, [hue, saturation, lightness]);

  const colorSliderTrackColor = makeHueSliderBackground();
  const saturationSliderTrackColor = makeSaturationSliderBackground(hue);
  const brightnessSliderTrackColor = makeBrightnessSliderBackground(hue);

  useEffect(() => {
    onChange(fromHSLToHex(hue, saturation, lightness));
  }, [hue, saturation, lightness]);

  return (
    <Styled.Container>
      <View color={hue} saturation={saturation} brightness={lightness} />
      <Range min={0} max={360} value={hue} setValue={setColor} trackColor={colorSliderTrackColor} />
      <Range
        min={0}
        max={100}
        value={saturation}
        setValue={setSaturation}
        trackColor={saturationSliderTrackColor}
      />
      <Range
        min={0}
        max={100}
        value={lightness}
        setValue={setBrightness}
        trackColor={brightnessSliderTrackColor}
      />
    </Styled.Container>
  );
};