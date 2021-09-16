class User < ApplicationRecord
    has_many :days, dependent: :destroy
    has_many :day_symptoms, through: :days
    has_many :symptoms, through: :day_symptoms

    validates :username, presence: true, uniqueness: true
    has_secure_password
 
end
