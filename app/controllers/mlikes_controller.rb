class MlikesController < ApplicationController
  def create
    @mlike = Mlike.create(user_id: current_user.id, music_id: params[:music_id])
    @mlikes = Mlike.where(muisc_id: params[:music_id])
    @musics = Music.all
  end

  def destroy
    mlike = Mlike.find_by(user_id: current_user.id, music_id: params[:music_id])
    mlike.destroy
    @mlikes = Mlike.where(music_id: params[:music_id])
    @musics = Music.all
  end
end
