class Mlike < ApplicationRecord
  belongs_to :user
  belongs_to :music, counter_cache: :mlikes_count
end
