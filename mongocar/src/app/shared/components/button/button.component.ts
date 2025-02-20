import {Component, Input} from '@angular/core';
import ButtonOptions from './interfaces/BtnOptions';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent{

  @Input()
  label = ""

  @Input()
  onClick = ()=> {}
  @Input()
  severity: ButtonOptions['severity'] = 'primary';
  @Input()
  variant: ButtonOptions['variant'] = undefined
}
