class CreateMlikes < ActiveRecord::Migration[5.2]
  def change
    create_table :mlikes do |t|
      t.bigint :user_id, foreign_key: true
      t.bigint :music_id, foreign_key: true
      t.timestamps
      t.index [:user_id, :music_id], unique: true
    end
  end
end
