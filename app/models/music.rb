class Music < ApplicationRecord
  belongs_to :user
  has_many :mlikes, dependent: :destroy

  def mlike_user(user_id)
    mlikes.find_by(user_id: user_id)
   end

end
