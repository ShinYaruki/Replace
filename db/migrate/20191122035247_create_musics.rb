class CreateMusics < ActiveRecord::Migration[5.2]
  def change
    create_table :musics do |t|
      t.string :url
      t.string :name
      t.string :address
      t.string :content
      t.timestamps
    end
  end
end
