class SymptomTypeSerializer < ActiveModel::Serializer
  attributes :id, :description
  has_many :symptoms 
end
