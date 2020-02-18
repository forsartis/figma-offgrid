figma.showUI(__html__, { width: 196, height: 169 });

figma.ui.onmessage = msg => {
  if (msg.type === 'create-grid') {
    const args = {
      rows: parseInt(msg.rows, 10),
      columns: parseInt(msg.columns, 10),
      hSpace: parseFloat(msg.hSpace),
      vSpace: parseFloat(msg.vSpace),
      hOffset: parseFloat(msg.hOffset),
      vOffset: parseFloat(msg.vOffset),
    };
    createGrid(args);
  }

  figma.closePlugin();
};

function createGrid(args) {
  const selection = figma.currentPage.selection;
  if (selection.length !== 1) {
    figma.notify('Please select one Node you would like to repeat.');
    return;
  }
  const copy: SceneNode = selection[0];
  const startX = copy.x + copy.width * 1.5;
  const startY = copy.y;
  const nodes: SceneNode[] = [];
  for (let column = 0; column < args.columns; column++) {
    for (let row = 0; row < args.rows; row++) {
      const tile =
        copy.type === 'COMPONENT' ? copy.createInstance() : copy.clone();
      const hOffset = row % 2 === 0 ? 0 : args.hOffset;
      const vOffset = column % 2 === 0 ? 0 : args.vOffset;
      tile.x = startX + (column * (tile.width + args.hSpace) + hOffset);
      tile.y = startY + (row * (tile.height + args.vSpace) + vOffset);
      copy.parent.appendChild(tile);
      nodes.push(tile);
    }
  }
  figma.currentPage.selection = nodes;
  figma.viewport.scrollAndZoomIntoView(nodes);
}
