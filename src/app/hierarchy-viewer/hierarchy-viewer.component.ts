import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

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
  @Input() nodeTemplateRef?: TemplateRef<any>;

  showAddFor: string | null = null;

  addChildTo(node: HierarchyNode): void {
    node.items = node.items ?? [];

    node.items.push({
      uid: Math.random().toString(),
      pid: node.uid,
      depth: node.depth + 1,
    });
  }
}
