import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { fromApp } from 'src/app/store';
import { fromAuth } from '../reducers';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(
        private store: Store<fromApp.State>
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {
        return this.store.pipe(
            select(fromAuth.selectUser),
            take(1),
            exhaustMap(user => {
                if (!user) {
                    return next.handle(req);
                }

                const modifiedReq = req.clone({
                    params: new HttpParams().set('auth', user.token)
                });

                return next.handle(modifiedReq);
            }),
        );
    }
}
