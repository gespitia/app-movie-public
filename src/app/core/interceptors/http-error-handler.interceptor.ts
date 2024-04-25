import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DialogService } from '../../shared/services/dialog.service';
import { ErrorRespnseInterface } from '../models/error-response.models';

export const httpErrorHandlerInterceptor: HttpInterceptorFn = (req, next): Observable<HttpEvent<any>> => {
  const dialogService = inject(DialogService);
  return next(req).pipe(
    catchError((error) => {
      if (error.status >= 400 && error.status <= 499) {
        return handleClientErrors(error, dialogService);
      } else if (error.status >= 500) {
        return handleServerErrors(error, dialogService);
      } else {
        return throwError(() => new Error(`Error no manejado: ${error.status}`));
      }
    })
  );
};

const handleClientErrors = (error: ErrorRespnseInterface, dialogService:DialogService) => {
  dialogService.openDialog(error);
  return throwError(() => new Error(`Error de cliente: ${error.status}`));
};

const handleServerErrors = (error: ErrorRespnseInterface, dialogService:DialogService) => {
  dialogService.openDialog(error);
  return throwError(() => new Error(`Error de servidor: ${error.status}`));
};


