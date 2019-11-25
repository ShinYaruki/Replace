class Place < ApplicationRecord
  has_many :place_ptags
  has_many :ptags, through: :place_ptags

  accepts_nested_attributes_for :place_ptags, allow_destroy: true
end