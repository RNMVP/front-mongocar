import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private readonly defaultLife = 3000
  constructor(private messageService: MessageService) {}
  successful(summary: string, message: string, life: number = this.defaultLife) {
    this.messageService.add({
      severity: 'success',
      summary,
      detail: message,
      life
    });
  }
  error(summary: string, message: string, life: number = this.defaultLife) {
    this.messageService.add({
      severity: 'error',
      summary,
      detail: message,
      life
    })
  }
}
