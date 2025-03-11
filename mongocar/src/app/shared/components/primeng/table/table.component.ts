import {Component, Input} from '@angular/core';
import {ActionColumn, NormalColumn} from '../../../../interfaces/Column';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input({required: true})
  cols!: (ActionColumn | NormalColumn)[];
  @Input({required: true})
  data!: any;
  @Input()
  tableStyles!: { [p: string]: any } | null | undefined;
}
