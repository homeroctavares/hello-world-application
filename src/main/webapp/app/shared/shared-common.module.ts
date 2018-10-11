import { NgModule } from '@angular/core';

import { HelloWorldApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HelloWorldApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HelloWorldApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HelloWorldApplicationSharedCommonModule {}
