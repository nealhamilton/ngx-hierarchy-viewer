import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type HierarchyNode = {
  uid: string;
  pid: string | null;
  depth: number;
  items?: HierarchyNode[];
};

@Component({
  selector: 'app-hierarchy-viewer',
  imports: [CommonModule],
  templateUrl: './hierarchy-viewer.component.html',
  styleUrl: './hierarchy-viewer.component.scss',
})
export class HierarchyViewerComponent {
  @Input() hierarchy: HierarchyNode[] = [];
}
