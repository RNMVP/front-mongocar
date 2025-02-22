import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) {}
  successfull(summary: string, message: string) {
    this.messageService.add({
      severity: 'success',
      summary,
      detail: message,
      life: 5000
    });
  }
  error(summary: string, message: string){
    this.messageService.add({
      severity: 'error',
      summary,
      detail: message,
      life: 5000
    })
  }
}
