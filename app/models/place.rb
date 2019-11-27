class Place < ApplicationRecord
  has_many :place_ptags
  has_many :ptags, through: :place_ptags

  validates :name, :address, :open, :close, :number,:station, presence: true
  validates :name, :address, :number, uniqueness: true

  accepts_nested_attributes_for :place_ptags, allow_destroy: true
end