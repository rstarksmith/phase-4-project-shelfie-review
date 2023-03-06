class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  # before_action :authorize


  private

  # def current_user
  #   User.find_by(id: session[:user_id])
  # end

  # def authorized_user
  #   render json: {error: "Not authorized"}, status: :unauthorized unless current_user
  # end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors }, status: :unprocessable_entity
  end

  def render_not_found
    render json: { errors: "Not found"}, status: :not_found
  end

  
end
