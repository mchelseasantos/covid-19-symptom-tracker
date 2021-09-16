class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_enitity_response
skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user
    end

    def show
        user = User.find(session[:user_id])
        render json: user
    end

    private
    def user_params
        params.permit(:username, :password)
    end

    def render_unprocessable_enitity_response(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

end
