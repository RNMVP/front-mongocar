import {Component, Input} from '@angular/core';

interface FieldOptions {
  value: string;
  type: string;
}

@Component({
  selector: 'app-dialog-form',
  standalone: false,
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.css'
})
export class DialogFormComponent {
  @Input()
  submitAction!: Function;
  @Input()
  fields!: FieldOptions[];
  @Input()
  forfillFormnValues!: Record<string, any>;

  displayDialog: boolean;

  constructor() {
    this.displayDialog = false;
  }

  changeVisibility(): void {
    this.displayDialog = !this.displayDialog;
  }
}
