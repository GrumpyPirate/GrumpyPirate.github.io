import { PropsWithClassName, IconGlyph } from 'types/common';

export type IconProps = PropsWithClassName<{
  glyph: IconGlyph;
  altText?: string;
}>;
