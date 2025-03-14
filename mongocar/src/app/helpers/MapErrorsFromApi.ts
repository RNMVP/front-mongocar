import {HttpErrorResponse} from '@angular/common/http';

export default function mapErrorsFromApi(error: HttpErrorResponse) {
  const messagesArray = error.error.errors.map((error: { code: number, message: string}) => error.message);
  return messagesArray.join('\n');
}
