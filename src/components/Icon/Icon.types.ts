import { ClassNameProps, IconGlyph } from 'types/common';

export interface IconProps extends ClassNameProps {
  glyph: IconGlyph;
  altText?: string;
}
