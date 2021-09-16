class Day < ApplicationRecord
  belongs_to :user
  has_many :day_symptoms, dependent: :destroy
  has_many :symptoms, through: :day_symptoms
end
