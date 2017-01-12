class DashboardController < ApplicationController
  def drivers
    @driver = Hash.new
    @driver[:name] = params[:driverName] || 'Driver Name'
    if @driver[:name].empty?
      @driver[:name] = 'Driver Name'
    end
    @driver[:sustainability_score] = '89.3'
  end
end
