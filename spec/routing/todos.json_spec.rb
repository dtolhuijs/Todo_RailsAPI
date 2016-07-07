require 'rails_helper'

describe "GET /todos.json" do
  before do
    get :index, format: :json
  end
end

describe 'POST /todos.json' do
  context 'new todo success' do
    before do
      post :create, format: :json, :todo => {title:"do homework"}
    end
  end
end

context 'new todo failure' do
  before do
    post :create, format: :json, :todo => {title:"/"}
  end
end

describe 'DELETE /todos/:id.json' do
  before do
    delete :destroy, format: :json, id: 1
  end
end

  context 'delete a todo' do
    it 'deletes a todo' do
      expect(Todo.where(id: 1)).to be_empty
    end
  end
