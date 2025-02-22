import {Component, Input} from '@angular/core';
import ButtonOptions from './interfaces/BtnOptions';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
})
export class ButtonComponent{

  @Input()
  label = ""

  @Input()
  onClick: Function = ()=> {}
  @Input()
  severity: ButtonOptions['severity'] = 'primary';
  @Input()
  variant: ButtonOptions['variant'] = undefined
  @Input()
  link: boolean = false;
  @Input()
  size: ButtonOptions['size'] = undefined
  @Input()
  styleClass: string | undefined = undefined
  @Input()
  ancora: string | undefined = undefined
}
