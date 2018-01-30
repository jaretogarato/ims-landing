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
      # render json: { id: @api_lead.id, title: @api_lead.title, firstName: @api_lead.firstName, lastName: @api_lead.lastName }
      # return ['redirect' => route('/success')];
      # return ['redirect' => route_for('/success')];
      render json: @api_lead;
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
    def api_lead_params
      params.require(:lead).permit(:firstName, :lastName, :email, :phone, :city, :insuranceCompany)
    end

end
