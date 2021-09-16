class DaySerializer < ActiveModel::Serializer
  attributes :id, :date
  has_one :user
end
