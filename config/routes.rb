Rails.application.routes.draw do
  resources :day_symptoms
  resources :symptoms
  resources :days, only: [:index]
  resources :users, only:[:create]
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  get "/home", to: "symptoms#home"
  delete "/logout", to: "sessions#destroy"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
