class CreatePtags < ActiveRecord::Migration[5.2]
  def change
    create_table :ptags do |t|
      t.string :name
      t.timestamps
    end
  end
end
