export function label(piece) {
  piece.name = {
    x: piece.icon.x + piece.icon.w / 2,
    y: piece.icon.y + piece.icon.h / 2
  };
  return piece;
}
