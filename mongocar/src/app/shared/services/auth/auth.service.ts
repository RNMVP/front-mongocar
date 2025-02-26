import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {jwtDecode} from 'jwt-decode';
import TokenModel from '../../models/TokenModel';
import {genericJwtKey} from '../../../tests/mocks/mocks';
import {of} from 'rxjs';
import CustomerToCreate from '../../models/entities/CustomerToCreate';
import CustomerSubject from '../../models/CustomerSubject';

interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  login = (credentials: Credentials) => {
    const returnable = {
      user: new CustomerSubject('jorge'),
      token: genericJwtKey
    }
    this.saveAccessToken(genericJwtKey)
    return of(returnable)

    // this.http.post(this.baseUrl, credentials).subscribe({
    //   next: (response:any) => {
    //     if (this.verifyToken(response.token)) {
    //       this.saveAccessToken(response.token)
    //       console.log('token retornado pela api validado!')
    //     }
    //     else console.error('retornado pela api invalido!');
    //   },
    //   error: (error) => {
    //     console.error('erro ao realizar login na api', error);
    //   }
    // })
  }

  logout = async () => {
    this.http.get(`${this.baseUrl}/logout`).subscribe({
      next: (response) => {
        console.log('logout da api realizado com sucesso!')
      },
      error: (error) => {
        console.error('erro ao realizar logout da api:', error);
      }
    })
  }

  authenticate = () =>{
    const savedAccessToken = this.getAccessToken();
    return this.verifyToken(savedAccessToken)
  }

  verifyToken = (token: string | null): boolean => {
    if (!token) {
      return false;
    }
    const decodedToken = jwtDecode<TokenModel>(token);
    console.log('decodedToken:', decodedToken);
    const expDate = decodedToken.exp
    return this.varifyDate(expDate)
  }

  private getAccessToken = () => {
    return localStorage.getItem('accessToken')
  }

  private saveAccessToken = (token: string) => {
    localStorage.setItem('accessToken', token);
  }

  private removeAccessToken = () => {
    localStorage.removeItem('accessToken');
  }

  private varifyDate = (stringDate: string) => {
    const expDate = new Date(stringDate).getTime()
    const currentDate = new Date().getTime() / 1000
    console.log('currentDate:', currentDate)
    console.log('expDate:', expDate)
    return expDate > currentDate;
  }
}
