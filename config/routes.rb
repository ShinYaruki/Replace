Rails.application.routes.draw do

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "homes#index"
  resources :homes, only: [:index]
  resources :places do
    resources :plikes , only: [:create,:destroy]
  end
  resources :musics do
    resources :mlikes , only: [:create,:destroy]
  end

  # PLACE新規投稿のactionを架空URLの"/places"にセットし、placesコントローラのcreateアクションを呼び出す
  post "/places/new" => "places#create"
  post "/places/edit" => "places#edit"
  # MUSIC新規投稿のactionを架空URLの"/musics"にセットし、musicsコントローラのcreateアクションを呼び出す
  post "/musics/new" => "musics#create"
  post "/musics/edit" => "musics#edit"
end