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
    
    #POST /signup
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # #PATCH /user/:id
    def update
        current_user.update!(user_update_params)
        render json: current_user, status: :ok
    end

    #DELETE /closeaccount
    def destroy
        current_user.destroy!
        session[:user_id] = nil
        # head :no_content
        render json: {}
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :photo_url)
    end

    def user_update_params
        params.permit(:photo_url)
    end
    
end
