class CreateCanvasConnections < ActiveRecord::Migration[7.1]
  def change
    create_table :canvas_connections do |t|
      t.string :name
      t.string :host_address
      t.string :port
      t.string :key

      t.timestamps
    end
  end
end
