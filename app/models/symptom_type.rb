class SymptomType < ApplicationRecord
    has_many :symptoms, dependent: :destroy 
    has_many :day_symptoms, dependent: :destroy
end
