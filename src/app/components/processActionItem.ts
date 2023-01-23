import { Type } from '@angular/core';

export class ProcessActionItem {
  constructor(
    public component: Type<any>,
    public desc: string,
    public cid: string
  ) {}
}
