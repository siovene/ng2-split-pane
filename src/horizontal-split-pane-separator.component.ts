import { Component } from '@angular/core';
import { SplitSeparatorComponent } from './split-pane-separator.component'

@Component({
  selector: 'horizontal-split-separator',
  styles: [`
    .pane-splitter {
      height: 7px;
      width: 100%;
      background-color: #fff;
      border-top: 1px solid #ddd;
      cursor: ns-resize;
    }
    .pane-splitter:hover {
      background-color: #fafafa;
    }
    .handle {
      width: 35px;
      height: 100%;
      background-color: #eee;
      margin: auto;
    }
  `],
  template: `
    <div class="pane-splitter">
      <div class="handle">
      </div>
    </div>
  `
})
export class HorizontalSplitSeparatorComponent extends SplitSeparatorComponent {
}