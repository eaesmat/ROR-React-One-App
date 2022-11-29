Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    namespace :v1 do
      get '/random_greeting', to: 'greetings#random'
    end
  end
end