import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoggerServcie } from "../logger.service";
import { CustomLoggerService } from "./custom-logger.service";
import { TestComponent } from "./test-cmp/test-cmp";

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
      provide: LoggerServcie,
      useClass: CustomLoggerService
    }
  ]
})
export class LazyModuleModule {}
