export interface MenuItem {
  label?: string;
  icon?: string;
  title?: string;
  command?: () => void;
  items?: MenuItem[];
  disabled?: boolean;
  visible?: boolean;
  separator?: boolean;
}