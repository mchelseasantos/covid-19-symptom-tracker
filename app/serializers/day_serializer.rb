class DaySerializer < ActiveModel::Serializer
  attributes :id, :date, :blood_pressure, :heart_rate, :temperature
  has_one :user
end
