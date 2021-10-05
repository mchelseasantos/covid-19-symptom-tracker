class CreateDaySymptoms < ActiveRecord::Migration[6.1]
  def change
    create_table :day_symptoms do |t|
      t.references :day, null: false, foreign_key: true
      t.references :symptom_type, null: false, foreign_key: true
      t.integer :severity

      t.timestamps
    end
  end
end
