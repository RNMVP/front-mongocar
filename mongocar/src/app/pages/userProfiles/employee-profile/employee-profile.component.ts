import {Component, OnInit} from '@angular/core';
import {ContextService} from '../../../shared/services/context/context.service';
import {Router} from '@angular/router';
import {UserService} from '../../../shared/services/user/user.service';
import EmployeeSubject from '../../../shared/models/EmployeeSubject';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employee-profile',
  standalone: false,
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.css'
})
export class EmployeeProfileComponent implements  OnInit {

  employee$!: Observable<EmployeeSubject | null>

  constructor(
    private contextService: ContextService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser()
  }

  getUser(): void {
    this.employee$ = this.contextService.user$ as Observable<EmployeeSubject>;
  }
}
