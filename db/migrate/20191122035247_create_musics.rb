class CreateMusics < ActiveRecord::Migration[5.2]
  def change
    create_table :musics do |t|
      t.text :url
      t.text :name
      t.text :artist
      t.text :playtime
      t.text :content
      t.bigint :mlikes_count
      t.integer :user_id, foreign_key: true
      t.timestamps
    end
  end
end
