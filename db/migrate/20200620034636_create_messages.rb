class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :group_id, null: false, foreign_key: true
      t.string :image
      t.text :comment
      t.string :created_at, null: false
      t.timestamps
    end
  end
end

