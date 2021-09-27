import { NgModule, ErrorHandler } from "@angular/core";
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  imports: [
    ToastrModule.forRoot({
      timeOut: 4000,
      extendedTimeOut: 4000,
      positionClass: 'toast-bottom-right',
      closeButton: true,
   }),
   NgSelectModule
  ],
  declarations: [
 
  ],
  providers: [
    
  ],
  exports: [
    ToastrModule, 
    NgSelectModule
  ],
})
export class SharedModule { }