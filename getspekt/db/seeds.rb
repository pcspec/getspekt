# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Piece.delete_all
Spec.delete_all
SpecPiece.delete_all

# CreatPPieceieceing rainyemz config - twitch.tc/rainyemz
rainyemz = {}
rainyemz[:cpu] = Piece.create!(
  name: "Intel i7-5820K 3.3GHz 6-Core",
  type_system: "CPU",
  picture: "http://ecx.images-amazon.com/images/I/41tUoL1SfrL.jpg",
  price: "409",
  url: "http://www.amazon.com/Intel-i7-5820K-Haswell-E-Processor-BX80648I75820K/dp/B00MMLXIKY",
)
rainyemz[:cpucooler] = Piece.create!(
  name: "Corsair H110i GT Liquid CPU Cooler",
  type_system: "CPU Cooler",
  picture: "http://www.corsair.com/en-us/~/media/E38C3C85F30E4129A059E339F942AB91.ashx?w=600",
  price: "139",
  url: " http://www.corsair.com/en-us/hydro-series-h110i-gt-280mm-extreme-performance-liquid-cpu-cooler"
)
rainyemz[:motherboard] = Piece.create!(
  name: "Asus X99-PRO ATX LGA2011-3 Mobo",
  type_system: "motherboard",
  picture: "http://ecx.images-amazon.com/images/I/51vBgiAikzL.jpg",
  price: "344",
  url: "https://www.asus.com/us/Motherboards/X99PRO/"
)
rainyemz[:ram] = Piece.create!(
  name: "Corsair Vengeance LPX 16GB DDR4-2400",
  type_system: "RAM",
  picture: "http://www.corsair.com/en/~/media/EA1D46C337964198B747CCF95593433C.ashx?w=750",
  price: "149",
  url: "http://www.corsair.com/en/vengeance-lpx-16gb-4x4gb-ddr4-dram-2400mhz-c14-memory-kit-black-cmk16gx4m4a2400c14"
)
rainyemz[:gc] = Piece.create!(
  name: "EVGA GeForce GTX 970 SC 4GB",
  type_system: "GC",
  picture: "http://www.evga.com/products/images/gallery/04G-P4-2974-KR_MD_1.jpg",
  price: "349",
  url: "http://www.evga.com/Products/Product.aspx?pn=04G-P4-2974-KR"
)
rainyemz[:tower] = Piece.create!(
  name: "http://www.corsair.com/en/carbide-series-air-540-high-airflow-atx-cube-case",
  type_system: "Tower",
  picture: "http://www.corsair.com/en/~/media/70343A0F4C1446EB8B7D013D7DF616B1.ashx",
  price: "199",
  url: "http://www.corsair.com/en/carbide-series-air-540-high-airflow-atx-cube-case"
)
rainyemz[:capturecard] = Piece.create!(
  name: "Avermedia C985 Capture Card",
  picture: "http://ecx.images-amazon.com/images/I/41pOViIj0ZL._SX300_.jpg",
  price: "170",
  url: "http://www.amazon.com/AVerMedia-Recorder-C985-Capture-Stream/dp/B007UXJ6LE"
)

rainyemz[:system] = Spec.create!(
  name: "system",
  commit_hash: "001OO1",
  is_last: 1,
)
SpecPiece.create!(spec_id: rainyemz[:system].id, piece_id: rainyemz[:cpu].id)
SpecPiece.create!(spec_id: rainyemz[:system].id, piece_id: rainyemz[:cpucooler].id)
SpecPiece.create!(spec_id: rainyemz[:system].id, piece_id: rainyemz[:motherboard].id)
SpecPiece.create!(spec_id: rainyemz[:system].id, piece_id: rainyemz[:ram].id)
SpecPiece.create!(spec_id: rainyemz[:system].id, piece_id: rainyemz[:gc].id)
SpecPiece.create!(spec_id: rainyemz[:system].id, piece_id: rainyemz[:tower].id)
SpecPiece.create!(spec_id: rainyemz[:system].id, piece_id: rainyemz[:capturecard].id)

