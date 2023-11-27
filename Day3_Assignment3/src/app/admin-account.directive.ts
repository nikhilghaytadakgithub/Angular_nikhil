import { Directive, TemplateRef, ViewContainerRef, OnChanges, Input} from '@angular/core';

@Directive({
  selector: '[appAdminAccount]'
})
export class AdminAccountDirective implements OnChanges{
  admin = ['Scott', 'Smith', 'Robert', 'Mark'];
  @Input() appAdminAccount:string = '';
  constructor(private viewRef: ViewContainerRef, private tempRef: TemplateRef<any> ) { }

  ngOnChanges(){
     if(this.admin.includes(this.appAdminAccount)){
       this.viewRef.createEmbeddedView(this.tempRef);
     }else{
      this.viewRef.clear();
     }
  }
}
