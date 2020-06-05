class Place < ApplicationRecord
  has_many :place_ptags, dependent: :destroy
  has_many :ptags, through: :place_ptags
  belongs_to :user
  has_many :plikes, dependent: :destroy

  validates :name, :address, :open, :close, :number,:station, presence: true
  validates :name, :address, :number, uniqueness: true

  accepts_nested_attributes_for :place_ptags, allow_destroy: true

  def plike_user(user_id)
   plikes.find_by(user_id: user_id)
  end
end