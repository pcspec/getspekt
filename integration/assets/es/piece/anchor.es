export function anchor(piece, tower, isRight = false) {
  if (false === "image" in piece && false === "tower" in piece) {
    return false;
  }
  let coords = {};
  if (false === isRight) {
    coords.from = {
      x: piece.image.x + piece.image.w,
      y: piece.image.y + piece.image.h
    };
  } else {
    console.log("in false");
    coords.from = {
      x: piece.image.x,
      y: piece.image.y
    };
    console.log(coords.from);
  }
  coords.to = {
    x: piece.tower.x + piece.tower.w / 2,
    y: piece.tower.y + piece.tower.h / 2
  };
  if ("to" in coords && "from" in coords) {
    piece.anchor = `
    M${coords.from.x} ${coords.from.y}L${coords.to.x} ${coords.to.y}
    `.trim()
    ;
    return piece;
  }
  return false;
}
