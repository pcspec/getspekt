export  function image(piece, size = {w: 150, h: 150}) {
  piece.image = {
    x: piece.icon.x + piece.icon.w,
    y: piece.icon.y,
    w: size.w,
    h: size.h
  };
  return piece;
}
