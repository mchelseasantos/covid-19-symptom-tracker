class DaySymptom < ApplicationRecord
  belongs_to :day
  belongs_to :symptom_type
end
