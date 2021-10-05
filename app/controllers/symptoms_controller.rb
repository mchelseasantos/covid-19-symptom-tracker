class SymptomsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_enitity_response
skip_before_action :authorize, only: :create

    def index
        render json: {home: "home"}
    end

    def create
        symptom = Symptom.create(symptom_params)
        render json: symptom
    end

    private
    def symptom_params
        params.permit(:symptom_type_id, :description)
    end

end
