class MusicsController < ApplicationController

  def new
    @music = Music.new
  end

  def create
    @music = Music.create(music_params)
  end

    # def edit
  # end

  # def update
  # end

  private

  def music_params
    params.require(:music).permit(:url,:name,:address,:content)
  end
end