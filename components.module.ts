import { NgModule } from '@angular/core';
import { ListComponent } from './list/list';
import { CalenderComponent } from './calender/calender';
@NgModule({
	declarations: [ListComponent,
    CalenderComponent],
	imports: [],
	exports: [ListComponent,
    CalenderComponent]
})
export class ComponentsModule {}
