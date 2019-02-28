Rails.application.routes.draw do
  root to: 'pages#home'
  get 'marketing', to: 'pages#marketing', as: 'marketing'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
