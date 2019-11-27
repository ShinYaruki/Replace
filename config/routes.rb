Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "homes#index"
  resources :homes, only: [:index,:new,:edit,:update]
  resources :places , only: [:index,:show,:new,:create,:edit,:update]
  resources :musics , only: [:index,:show,:new,:create,:edit,:update]
  # PLACE新規投稿のactionを架空URLの"/places"にセットし、placesコントローラのcreateアクションを呼び出す
  post "/places" => "places#create"
  # MUSIC新規投稿のactionを架空URLの"/musics"にセットし、musicsコントローラのcreateアクションを呼び出す
  post "/musics" => "musics#create"
end