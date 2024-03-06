class Api::V1::CanvasConnectionsController < ApplicationController
  def index
    connections = CanvasConnection.all.order(name: :asc)
    render json: connections
  end

  def create
    connection = CanvasConnection.create!(connection_params)
    if connection
      render json: {"success"}
    else
      render json: connection.errors
    end
  end

  def show
    render json: @connection
  end

  def destroy
    @connection&.destroy
    render json: {"delete connection successful"}
  end

  private

  def connection_params
    params.permit(:name, :host, :port, :key)
  end

  def set_connection
    @connection = CanvasConnection.find(params[:id])
  end
end
