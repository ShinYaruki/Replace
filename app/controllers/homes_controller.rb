class HomesController < ApplicationController

  def index
    @places = Place.all
    @musics = Music.all
    @place = Place.new
    @music = Music.new
  end

  # def new
  #   @music = Music.new
  #   @place = Place.new
  # end

  # def create
  #     @place = Place.create(place_params)
  #     @place.save
  # end

  # private
  # def music_params
  #   params.require(:music).permit(:url,:name,:address,:content)
  # end

  # def place_params
  #   params.require(:place).permit(:image,:name,:address,:content)
  # end
end
