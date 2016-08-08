Rails.application.routes.draw do
  get "about" => "pages#about"
  root "pages#about"
  resources :projects
  resources :authors
  resources :author_sessions, only:[:new, :create, :destroy]
  resources :contacts, only: [:new, :create]
  get "login" => "author_sessions#new"
  get "logout" => "author_sessions#destroy"
end