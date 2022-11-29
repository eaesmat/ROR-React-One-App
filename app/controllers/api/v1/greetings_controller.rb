class Api::V1::GreetingsController < ActionController::API
  def random
    greetings = Greeting.all
    @greeting = greetings[rand(greetings.size)]
    render json: @greeting
  end
end
