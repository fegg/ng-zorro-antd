import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[nz-tbody-tr]'
})

export class NzTbodyTrDirective {
  @HostBinding(`class.ant-table-row`) _nzTableRow = true;
}
