class SpecsController < ApplicationController
  def show
    @spec = Spec.find(params[:id])
    @piece_id = SpecPiece.where(spec_id: @spec).select("piece_id")
    @pieces = Piece.where(id: @piece_id)
  end
  def new
  end
  def create
  end

  def update
  end

  def delete
  end

  private

  def spec_params
    params.require(:specs).permit(:id)
  end
end
