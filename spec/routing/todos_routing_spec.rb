require 'rails_helper'

  RSpec.describe TodosController, type: :routing do
    describe "routing" do

      it "routes to #index" do
        expect(:get => "/").to route_to("todos#index")
      end
  end

  it "routes /todos to the TodosController" do
    expect(get("/todos/1")).
      to route_to("todos#show", id: 1)
    end
end
