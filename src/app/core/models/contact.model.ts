export interface Contact {
  menu: ContactMenu;
}

export interface ContactMenu {
  items: ContactItems;
}

export interface ContactItems {
  mode: ContactMode;
  language: ContactLanguage;
  download: ContactDownload;
}

export interface ContactMode {
  title: string;
  dark: string;
  light: string;
}

export interface ContactLanguage {
  label: string;
  title: string;
}

export interface ContactDownload {
  label: string;
  title: string;
}
