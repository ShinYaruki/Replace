class PlacesController < ApplicationController
  
  def new
    @place = Place.new
  end

  def create
    @place = Place.create(place_params)
  end

  # def edit
  # end

  # def update
  # end

  private
  def place_params
    params.require(:place).permit(:image,:name,:address,:content)
  end
end