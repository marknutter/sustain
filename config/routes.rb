Rails.application.routes.draw do
  devise_for :users
  root to: 'dashboard#index'
  get 'lanes', to: 'dashboard#lanes'
  get 'customers', to: 'dashboard#customers'
  get 'drivers', to: 'dashboard#drivers'
  get 'trucks', to: 'dashboard#trucks'
end
