Rails.application.routes.draw do
  
  
  resources :books, only: [:index, :show, :create] do
    resources :reviews
  end
  
  get "/myshelfie", to: "users#show"
  post "/signup", to: "users#create"
  post "/signin", to: "sessions#create"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
