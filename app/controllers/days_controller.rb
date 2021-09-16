class DaysController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        render json: user.days
    end

end
