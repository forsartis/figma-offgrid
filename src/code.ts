figma.showUI(__html__, { width: 196, height: 169 });

figma.ui.onmessage = msg => {
  if (msg.type === 'create-grid') {
    const selection = figma.currentPage.selection;
    if (selection.length !== 1) {
      figma.notify('Please select one Node you would like to repeat.');
      return;
    }
    const copy: SceneNode = selection[0];
    const startX = copy.x + copy.width * 1.5;
    const startY = copy.y;
    const nodes: SceneNode[] = [];
    for (let column = 0; column < msg.columns; column++) {
      for (let row = 0; row < msg.rows; row++) {
        const tile =
          copy.type === 'COMPONENT' ? copy.createInstance() : copy.clone();
        const hOffset = row % 2 === 0 ? 0 : msg.hOffset;
        const vOffset = column % 2 === 0 ? 0 : msg.vOffset;
        tile.x = startX + (column * (tile.width + msg.hSpace) + hOffset);
        tile.y = startY + (row * (tile.height + msg.vSpace) + vOffset);
        figma.currentPage.appendChild(tile);
        nodes.push(tile);
      }
      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);
    }
  }

  figma.closePlugin();
};
