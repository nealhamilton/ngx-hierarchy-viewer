import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  HierarchyNode,
  HierarchyViewerComponent,
} from './hierarchy-viewer/hierarchy-viewer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HierarchyViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hierarchy-viewer';

  hierarchy: HierarchyNode[] = [
    {
      uid: 'abc',
      pid: null,
      depth: 1,
      items: [
        { uid: 'def', pid: 'abc', depth: 2 },
        {
          uid: 'ghi',
          pid: 'abc',
          depth: 2,
          items: [
            { uid: 'jkl', pid: 'ghi', depth: 3 },
            { uid: 'mno', pid: 'ghi', depth: 3 },
          ],
        },
      ],
    },
  ];
}
