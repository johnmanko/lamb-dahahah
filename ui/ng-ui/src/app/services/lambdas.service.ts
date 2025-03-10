import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HelloMessageModel, BucketObjectSummaryModel, LogreadResultModel, BucketObjectContentModel } from "models";

const API__BASE_URL = "lambda-url.us-east-2.localhost.localstack.cloud:4566/";
const ENDPOINTS: Record<string, string> = {
  'hello': `http://lambdahahah-hello.${API__BASE_URL}`,
  'logread': `http://lambdahahah-logread.${API__BASE_URL}`,
  'bucket-list': `http://lambdahahah-bucket-list.${API__BASE_URL}`,
  'bucket-read': `http://lambdahahah-bucket-read.${API__BASE_URL}`
}

@Injectable({
  providedIn: "root"
})
export class LambdasService {

  private http = inject(HttpClient);
  private buckContentChanged = new Subject<{key: string, content: BucketObjectContentModel}>();

  constructor() {}

  public getLambdaURL(lambdaName: string | undefined): string {
    return lambdaName ? ENDPOINTS[lambdaName]:'';
  }

  public getHello(): Observable<HelloMessageModel> {
    return this.http.get<HelloMessageModel>(ENDPOINTS['hello']);
  }

  public getLogRead(): Observable<LogreadResultModel> {
    return this.http.get<LogreadResultModel>(ENDPOINTS['logread']);
  }

  public getBucketList(): Observable<BucketObjectSummaryModel> {
    return this.http.get<BucketObjectSummaryModel>(ENDPOINTS['bucket-list']);
  }

  public getBucketObject(objectKey: string): Observable<BucketObjectContentModel> {
    return this.http.get<BucketObjectContentModel>(
      ENDPOINTS['bucket-read'],
      {
        params: {
          key: objectKey
        }
      }
      );
  }

  public notifyBucketContentChanged(content: {key: string, content: BucketObjectContentModel}): void {
    this.buckContentChanged.next(content);
  }

  public subscribeToBucketContentChanged(): Subject<{key: string, content: BucketObjectContentModel}> {
    return this.buckContentChanged;
  }

}
