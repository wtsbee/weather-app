class CreateMaps < ActiveRecord::Migration[5.2]
  def change
    create_table :maps do |t|
      t.integer :prefecture_id, null: false
      t.timestamps
    end
  end
end
