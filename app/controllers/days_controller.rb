class DaysController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        render json: user.days
    end

    def create
        day = Day.create(day_params)
        render json: day
    end

    private
    def day_params
       params.permit(:user_id, :date, :temperature, :blood_pressure, :heart_rate, day_symptoms_attributes: [
           :symptom_type_id,
           :severity,
       ])
    end

end
