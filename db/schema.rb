# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_14_163842) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "day_symptoms", force: :cascade do |t|
    t.bigint "day_id", null: false
    t.bigint "symptom_id", null: false
    t.integer "severity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["day_id"], name: "index_day_symptoms_on_day_id"
    t.index ["symptom_id"], name: "index_day_symptoms_on_symptom_id"
  end

  create_table "days", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.date "date"
    t.string "temperature"
    t.string "blood_pressure"
    t.string "heart_rate"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_days_on_user_id"
  end

  create_table "symptoms", force: :cascade do |t|
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "day_symptoms", "days"
  add_foreign_key "day_symptoms", "symptoms"
  add_foreign_key "days", "users"
end
