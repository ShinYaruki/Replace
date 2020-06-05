class CreatePlikes < ActiveRecord::Migration[5.2]
  def change
    create_table :plikes do |t|
      t.bigint :user_id, foreign_key: true
      t.bigint :place_id, foreign_key: true

      t.timestamps
      t.index [:user_id, :place_id], unique: true
    end
  end
end