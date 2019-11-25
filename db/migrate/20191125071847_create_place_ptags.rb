class CreatePlacePtags < ActiveRecord::Migration[5.2]
  def change
    create_table :place_ptags do |t|
      t.bigint :place_id , foreign_key: true
      t.bigint :ptag_id , foreign_key: true
      t.timestamps
    end
  end
end
