Rails.application.routes.draw do
  resources :symptom_types, only:[:index]
  resources :day_symptoms
  resources :symptoms, only:[:create]
  resources :days, only:[:create]
  resources :users, only:[:create]
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
