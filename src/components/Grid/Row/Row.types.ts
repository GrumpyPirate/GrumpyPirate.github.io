export type RowXAlign = 'left' | 'center' | 'right';
export type RowYAlign = 'top' | 'center' | 'bottom' | 'stretch';

export interface RowProps {
  xAlign?: RowXAlign;
  yAlign?: RowYAlign;
}
