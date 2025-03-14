import {Injectable, Input} from '@angular/core';
import {ConfirmationService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(
    private confirmationService: ConfirmationService,
  ) {}

  @Input()
  message!: string;
  @Input()
  header!: string;
  @Input()
  icon!: string;
  @Input()
  acceptFunction!: Function;

  confirm = (
    message: string,
    header: string,
    icon?: string,
    acceptFunction?: Function
    ) => {
    this.confirmationService.confirm({
      message,
      header,
      icon,
      accept: acceptFunction,
    })
  }
}
