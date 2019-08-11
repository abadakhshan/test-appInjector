import { ConsoleLoggerService } from "./console-logger.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppInjector } from "./AppInjector";
import { LoggerServcie } from "./logger.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: LoggerServcie,
      useClass: ConsoleLoggerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.injector = injector;
  }
}
