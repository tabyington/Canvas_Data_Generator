class CanvasConnection < ApplicationRecord
    validates :name, presence: true
    validates :host_address, presence: true
    validates :port, presence: true
    validates :key, presence: true
end
