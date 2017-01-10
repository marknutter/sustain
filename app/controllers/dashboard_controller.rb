class DashboardController < ApplicationController
  def drivers
    @driver = params[:driverName] || 'Driver Name'
  end
end
