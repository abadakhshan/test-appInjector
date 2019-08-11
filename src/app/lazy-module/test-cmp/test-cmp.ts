import { Component, OnInit, Injector } from "@angular/core";
import { BaseWithInjectorServiceComponent } from "src/app/base-cmp";

@Component({
  template: "<div>Lazy Component Content</div>"
})
export class TestComponent extends BaseWithInjectorServiceComponent
  implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.logger.log("TestComponent");
  }
}
