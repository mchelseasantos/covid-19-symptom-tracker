# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Day.destroy_all
SymptomType.destroy_all
Symptom.destroy_all
DaySymptom.destroy_all

user = User.create(username:"Chelsea1", password: "flowers123")

30.times do
    Day.create(user_id: user.id, date: Faker::Date.between(from: '2021-09-14', to: '2021-12-31'), temperature: "98.7 F", blood_pressure: "120/80", heart_rate: "60 bpm")
end

rs = SymptomType.create(description: "Respiratory Symptoms")
ss = SymptomType.create(description: "Sensory Symptoms")
ns = SymptomType.create(description: "Neuro Symptoms")
fbs = SymptomType.create(description: "Full Body Symptoms")
gs = SymptomType.create(description: "Gastrointestinal Symptoms")

Symptom.create(description: "cough", symptom_type: rs)
Symptom.create(description: "chills", symptom_type: fbs)
Symptom.create(description: "congestion", symptom_type: rs)
Symptom.create(description: "sore throat", symptom_type: rs)
Symptom.create(description: "shortness of breath", symptom_type: rs)
Symptom.create(description: "chest discomfort", symptom_type: rs)
Symptom.create(description: "lack of smell", symptom_type: ss)
Symptom.create(description: "lack of taste", symptom_type: ss)
Symptom.create(description: "fatigue", symptom_type: fbs)
Symptom.create(description: "muscle or body aches", symptom_type: fbs)
Symptom.create(description: "headache", symptom_type: ns)
Symptom.create(description: "forgetfullness or confusion", symptom_type: ns)
Symptom.create(description: "nausea", symptom_type: gs)
Symptom.create(description: "vomiting", symptom_type: gs)
Symptom.create(description: "diarrhea", symptom_type: gs)

DaySymptom.create(day_id: Day.all.sample.id, symptom_type_id: SymptomType.all.sample.id, severity: rand(1..5))

