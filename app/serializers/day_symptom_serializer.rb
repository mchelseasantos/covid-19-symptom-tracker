class DaySymptomSerializer < ActiveModel::Serializer
  attributes :id, :severity
  has_one :day
  has_one :symptom
end
