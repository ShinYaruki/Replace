class CreateMusics < ActiveRecord::Migration[5.2]
  def change
    create_table :musics do |t|
      t.text :url
      t.text :name
      t.text :playtime
      t.text :content
      t.timestamps
    end
  end
end
