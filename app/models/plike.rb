class Plike < ApplicationRecord
  belongs_to :user
  belongs_to :place, counter_cache: :plikes_count
end
