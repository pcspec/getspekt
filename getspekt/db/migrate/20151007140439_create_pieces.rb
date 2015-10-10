class CreatePieces < ActiveRecord::Migration
  def change
    create_table :pieces do |t|
      t.string :name
      t.string :picture
      t.string :type_system
      t.decimal :price, precision: 3, scale: 12
      t.string :url

      t.timestamps
    end
  end
end
