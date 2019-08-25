Rails.application.routes.draw do
  root 'maps#index'
  resources :maps do
    resources :weathers
  end
end
