import { TNotificationsPosition } from './notification';

export interface ITheme {
  colors: {
    gradient: string;
    background: string;
    container: string;
    border: string;
    hover: string;
    shadow?: string;

    primaryButton: IButtonThemeParams;
    secondaryButton: IButtonThemeParams;

    header: string;
    highlight: string;
    primaryText: string;
    secondaryText: string;
    contrastText: string;

    input: {
      border: string;
      text: string;
      background: string;
    };

    leftPanel: {
      background: string;
      text: string;
      rowActiveBackground: string;
      rowActiveBorder: string;
      rowHoverBackground: string;
      rowActiveHoverBackground: string;
    };

    notification: {
      info: INotificationThemeParams;
      error: INotificationThemeParams;
    };

    table: {
      rowBackground: string;
      rowEvenBackground: string;
      headerBackground: string;
    };
  };

  typography: {
    h1: string;
    subtitle1: string;
    button: string;
  };

  device: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
    desktopL: string;
  };

  notificationPosition: TNotificationsPosition;
}

interface IButtonThemeParams {
  background: string;
  color: string;
  borderColor?: string;
  hoverBackground: string;
  hoverColor: string;
  hoverBorderColor?: string;
}

interface INotificationThemeParams {
  background: string;
  headerText: string;
  bodyText: string;
}