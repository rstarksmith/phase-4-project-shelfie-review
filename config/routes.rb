Rails.application.routes.draw do
  
  resources :books, only: [:index, :create] do
    resources :reviews, only: [:create]
  end

  resources :reviews, only: [:update, :destroy]
  
  
  get "/auth", to: "users#show"
  get "/shelfieshare", to: "users#index"
  post "/signup", to: "users#create"
  post "/signin", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
