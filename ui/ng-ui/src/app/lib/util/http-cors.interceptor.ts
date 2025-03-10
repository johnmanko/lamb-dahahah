import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const HttpCORSInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {

    // const url = req.url;
    // if (url.includes("localhost")) {
    //   const newRequest = req.clone({
    //     setHeaders: {
    //     }
    //   });
    //   return next(newRequest);
    // }
    return next(req);
};
