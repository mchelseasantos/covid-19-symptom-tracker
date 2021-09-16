class SymptomsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_enitity_response
skip_before_action :authorize, only: :create

    def index
        
        render json: {home: "home"}
    end

end
