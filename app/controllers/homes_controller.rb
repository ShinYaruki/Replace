class HomesController < ApplicationController

  def index
    @places = Place.all
    @musics = Music.all

    places = @places
    @myplaces = current_user.places

    musics = @musics
    @mymusics = current_user.musics

    @place = Place.new
    @music = Music.new 
  end

end