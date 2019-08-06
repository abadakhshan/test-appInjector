import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestService } from "./service";
import { TestComponent } from "./test-cmp/test-cmp";
import { RouterModule, Routes } from "@angular/router";
import { BaseService } from '../base-service';

const routes: Routes = [
  {
    path: "",
    component: TestComponent
  }
];

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [
    {
      provide: BaseService,
      useClass: TestService
    }
  ]
})
export class LazyModuleModule {}
