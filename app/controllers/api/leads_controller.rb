class Api::LeadsController < ApplicationController
  def index
    # render json: Movie.select(:id, :title, :release_year, :director)
    # @api_movies = Movie.all
    render json: Lead.all
  end

  def show
  end

  def create
    @api_lead = Lead.new(api_lead_params)

    if @api_lead.save
      render json: { id: @api_lead.id, title: @api_lead.title, first_name: @api_lead.first_name, last_name: @api_lead.last_name }
    else
      render json: { errors: @api_lead.errors.full_messages }, status: 422
    end
  end

  def update
  end

  def destroy
    Lead.find(params[:id]).destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_lead
      @api_lead = Lead.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_movie_params
      params.require(:movie).permit(:title, :first_name, :last_name, :email, :phone, :phone_type, :state, :city, :insurance_company)
    end

end
