class Day < ApplicationRecord
  belongs_to :user
  has_many :day_symptoms, dependent: :destroy
  has_many :symptoms, through: :day_symptoms
  accepts_nested_attributes_for :day_symptoms
end
