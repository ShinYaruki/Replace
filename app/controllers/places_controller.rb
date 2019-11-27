class PlacesController < ApplicationController
  
  def new
    @place = Place.new
  end

  def create
    @place = Place.create(place_params)
    @place.save
    redirect_to root_path
    # if @place.save
    #   respond_to do |format|
    #     format.html {redirect_to root_path}
    #     format.json
    #   end
    # end
  end

  # def edit
  # end

  # def update
  # end

  def show
  end

  private
  def place_params
    params.require(:place).permit(:image,:name,:address,:open,:close,:number,:content,:sheet,:station,:walk,ptag_ids: [])
  end
end