class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.text :name,null:  false, unique: true
      t.text :address,null: false, unique: true
      t.text :image
      t.text :content
      t.text :open,null: false
      t.text :close,null: false
      t.text :number,null: false, unique: true
      t.text :sheet
      t.text :station
      t.text :walk
      t.timestamps
    end
  end
end