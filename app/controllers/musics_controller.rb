class MusicsController < ApplicationController

  def new
    @music = Music.new
  end

  def create
    @music = Music.create(music_params)
    @music.save!
    redirect_to root_path
  end

  def edit
    @music = Music.find(params[:id])
  end

  def update
    @music = Music.update(music_params)
    redirect_to root_path
  end

  private

  def music_params
    params.require(:music).permit(:url,:name,:artist,:playtime,:content).merge(user_id: current_user.id)
  end
end