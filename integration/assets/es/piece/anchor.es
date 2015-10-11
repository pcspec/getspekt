export function anchor(piece, tower) {
    if (false === "image" in piece && false === "tower" in piece) {
      return false;
    }
    let coords = {
      from: {
        x: piece.image.x + piece.image.w,
        y: piece.image.y + piece.image.h
      },
      to: {
        x: piece.tower.x + piece.tower.w / 2,
        y: piece.tower.y + piece.tower.h / 2
      }
    };
    piece.anchor = `
      M${coords.from.x} ${coords.from.y}L${coords.to.x} ${coords.to.y}
    `.trim();
    return piece;
}
