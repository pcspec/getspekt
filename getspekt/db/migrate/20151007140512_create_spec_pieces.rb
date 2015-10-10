class CreateSpecPieces < ActiveRecord::Migration
  def change
    create_table :spec_pieces do |t|
      t.integer :spec_id
      t.integer :piece_id

      t.timestamps
    end
  end
end
