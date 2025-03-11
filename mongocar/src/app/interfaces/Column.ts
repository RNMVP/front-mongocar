export interface Column {

}

export interface NormalColumn extends Column {
  field: string;
  header: string;
  clickable?: boolean;
  action?: Function;
  [prop: string]: any;
}

export interface ActionColumn extends Column {
  icon: string;
  action: Function;
}
