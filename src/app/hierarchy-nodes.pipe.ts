import { Pipe, PipeTransform } from '@angular/core';
import { HierarchyNode } from './hierarchy-viewer/hierarchy-viewer.component';

@Pipe({
  name: 'hierarchyNodes',
})
export class HierarchyNodesPipe implements PipeTransform {
  transform(array: any[], id: string = 'uid', parentId: string = 'pid'): any[] {
    const map = array.reduce(
      (acc, node) => ((node.items = []), (acc[node[id]] = node), acc),
      {}
    );

    return Object.values(map)
      .map(
        (node: any) => (
          node[parentId] && map[node[parentId]].items.push(node), node
        )
      )
      .filter((node) => node[parentId] === null);
  }
}
