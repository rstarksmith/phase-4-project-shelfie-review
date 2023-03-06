class UsersController < ApplicationController
    skip_before_action :authorized, only: [:index, :create]

    def index
        users = User.all 
        render json: users, status: :ok
    end

       def show
        render json: current_user, status: :ok
    end
    
    def create 
        user = User.create!(user_params)
        session[user.id] = user.id
        render json: user, status: :created
    end


    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :photo_url)
    end
    
end
