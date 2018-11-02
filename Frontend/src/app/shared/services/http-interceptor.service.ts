import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/index';

const apiUrl = 'http://localhost:3000/api';

export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      url: this.modifyUrl(req.url)
    });
    return next.handle(modifiedReq);
  }

  private modifyUrl(url: string): string {
    return `${apiUrl}${url}`;
  }
}
