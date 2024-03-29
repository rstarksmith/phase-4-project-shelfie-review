class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  before_action :authorized

  def current_user
    User.find_by(id: session[:user_id])
  end

  def authorized
    render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
  end
 
  private

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors }, status: :unprocessable_entity
  end

  def render_not_found
    render json: { error: "Not found"}, status: :not_found
  end

  
end
