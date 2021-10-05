class Symptom < ApplicationRecord
    # has_many :day_symptoms, dependent: :destroy
    # has_many :days, through: :day_symptoms
    belongs_to :symptom_type
end
