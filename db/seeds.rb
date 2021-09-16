# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Day.destroy_all
Symptom.destroy_all
DaySymptom.destroy_all

user = User.create(username:"Chelsea1", password: "flowers123")

30.times.do
Day.create(user_id: user.id, date: Faker::Date.between(from: '2021-09-14', to: '2021-12-31'), temperature: "98.7 F", blood_pressure: "120/80", heart_rate: "60 bpm" )
end

Symptom.create(description: "cough")
Symptom.create(description: "chills")
Symptom.create(description: "congestion")
Symptom.create(description: "sore throat")
Symptom.create(description: "shortness of breath")
Symptom.create(description: "chest discomfort")
Symptom.create(description: "lack of smell")
Symptom.create(description: "lack of taste")
Symptom.create(description: "fatigue")
Symptom.create(description: "muscle or body aches")
Symptom.create(description: "headache")
Symptom.create(description: "forgetfullness or confusion")
Symptom.create(description: "nausea or vomiting")
Symptom.create(description: "diarrhea")

DaySymptom.create(day_id: Day.all.sample.id, symptom_id: Symptom.all.sample.id, severity: rand(1..5))

