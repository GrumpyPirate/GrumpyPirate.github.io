import { ChildrenProps } from 'types/common';

export interface RowProps extends ChildrenProps {
  align?: 'top' | 'middle' | 'bottom';
  alignSM?: 'top' | 'middle' | 'bottom';
  alignMD?: 'top' | 'middle' | 'bottom';
  alignLG?: 'top' | 'middle' | 'bottom';
  alignXL?: 'top' | 'middle' | 'bottom';
  justify?: 'left' | 'center' | 'right' | 'space-between' | 'space-around';
  justifySM?: 'left' | 'center' | 'right' | 'space-between' | 'space-around';
  justifyMD?: 'left' | 'center' | 'right' | 'space-between' | 'space-around';
  justifyLG?: 'left' | 'center' | 'right' | 'space-between' | 'space-around';
  justifyXL?: 'left' | 'center' | 'right' | 'space-between' | 'space-around';
}
