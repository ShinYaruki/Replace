class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.text :name
      t.text :address
      t.text :image
      t.text :content
      t.text :open
      t.text :close
      t.text :number
      t.text :sheet
      t.text :station
      t.text :walk
      t.bigint :plikes_count
      t.integer :user_id, foreign_key: true
      t.timestamps
    end
  end
end