import { inject } from '@angular/core';
import { LambdasService } from '../../services/lambdas.service';

export abstract class AbstractLambdaComponent {

  lambdaService = inject(LambdasService);

  get urls(): string[] {
    return [];
  }

}
