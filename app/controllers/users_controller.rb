class UsersController < ApplicationController
    skip_before_action :authorized, only: [:index, :create]

    #GET /shelfieshare  ---serializer?
    def index
        users = User.all 
        render json: users, status: :ok
    end

    #GET /auth
    def show
        render json: current_user, status: :ok
    end
    
    #CREATE /signup
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    #DELETE /closeaccount
    def destroy
        current_user.destroy
        session[:user_id] = nil
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :photo_url)
    end
    
end
