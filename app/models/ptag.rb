class Ptag < ApplicationRecord
  has_many :place_ptags
  has_many :places, through: :place_ptags
end
