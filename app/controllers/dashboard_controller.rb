class DashboardController < ApplicationController
  def drivers
    @driver = Hash.new
    @driver[:name] = params[:driverName] || 'Driver Name'
    @driver[:sustainability_score] = '89.3'
  end
end
