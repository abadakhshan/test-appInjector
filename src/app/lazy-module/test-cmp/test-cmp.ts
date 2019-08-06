import { Component, OnInit, Injector } from "@angular/core";
import { BaseWithInjectorServiceComponent } from "src/app/base-cmp";
import { BaseService } from "src/app/base-service";

@Component({
  template: "test"
})
export class TestComponent extends BaseWithInjectorServiceComponent
  implements OnInit {
  service2: BaseService;
  constructor(injector: Injector) {
    super();

    // Mode 2:
    this.service2 = injector.get(BaseService);
  }

  ngOnInit() {
    console.log(!!this.service ? "Service has value" : "Service is null");
    console.log(!!this.service2 ? "Service2 has value" : "Service2 is null");
  }
}
