class PlikesController < ApplicationController

  def create
    @plike = Plike.create(user_id: current_user.id, place_id: params[:place_id])
    @plikes = Plike.where(place_id: params[:place_id])
    @places = Place.all
  end

  def destroy
    plike = Plike.find_by(user_id: current_user.id, place_id: params[:place_id])
    plike.destroy
    @plikes = Plike.where(place_id: params[:place_id])
    @places = Place.all
  end

end