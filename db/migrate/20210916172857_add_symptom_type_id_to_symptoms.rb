class AddSymptomTypeIdToSymptoms < ActiveRecord::Migration[6.1]
  
  def change
    add_reference :symptoms, :symptom_type, foreign_key: true
  end

end
