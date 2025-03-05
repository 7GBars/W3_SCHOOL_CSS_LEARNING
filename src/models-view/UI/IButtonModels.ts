export interface IButtonModelBase {
  textOption: { isVisible: boolean; caption: string };
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  icon?: {
    url: string;
    isVisible: boolean,
    position?: 'left' | 'right',
    size?: number
  };
  tabIndex?: number;
}

