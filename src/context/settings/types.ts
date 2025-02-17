export type SettingsValueProps = {
  themeMode: 'light' | 'dark';
  themePrimary: string;
  themeSecondary: string;
};

export type SettingsContextProps = {
  onUpdate: (name: string, value: string | boolean) => void;
  onReset: VoidFunction;
} & SettingsValueProps;