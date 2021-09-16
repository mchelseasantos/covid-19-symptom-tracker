class CreateDays < ActiveRecord::Migration[6.1]
  def change
    create_table :days do |t|
      t.references :user, null: false, foreign_key: true
      t.date :date
      t.string :temperature 
      t.string :blood_pressure
      t.string :heart_rate

      t.timestamps
    end
  end
end
