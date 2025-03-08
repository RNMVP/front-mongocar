import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: false,
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {

  @Input({required:true})
  tabs: { label: string; icon: string; route: string; }[] | undefined;
  // These classes work only with global classes made available by primeflex library
  @Input({alias:'contentClasses'})
  classes!:string;
}
