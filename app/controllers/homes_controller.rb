class HomesController < ApplicationController

  def index
    @places = Place.all
    @musics = Music.all
    @place = Place.new
    @music = Music.new 
    if user_signed_in?
      #自分の投稿したPlace、Musicの一覧を表示
      @myplaces = Place.where(user_id: current_user.id)
      @mymusics = Music.where(user_id: current_user.id)
      #自分のお気に入りしたPlace、Musicの一覧を表示(お気に入りテーブル内のuser_idがログインユーザーで、その中のplace_id(or music_id)カラムのみを抽出)
      @likeplaces = Place.where(id: Plike.where(user_id: current_user.id).select("place_id"))
      @likemusics = Music.where(id: Mlike.where(user_id: current_user.id).select("music_id"))
    end
    #皆のお気に入りしたPlace、Musicの一覧を取得し、多い順に並び替える。
    @rankplaces = Place.where(id: Plike.select("place_id")).order("plikes_count DESC").limit(3)
    @rankmusics = Music.where(id: Mlike.select("music_id")).order("mlikes_count DESC").limit(3)
  end
end