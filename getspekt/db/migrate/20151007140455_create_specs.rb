class CreateSpecs < ActiveRecord::Migration
  def change
    create_table :specs do |t|
      t.string :name
      t.string :commit_hash
      t.integer :is_last

      t.timestamps
    end
  end
end
