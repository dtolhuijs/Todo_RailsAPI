# spec/models/todo_spec.rb
require 'rails_helper'

describe Todo do
  describe "validations" do
    it "is invalid without a title" do
      todo = Todo.new(title: "")
      todo.valid?
      expect(todo.errors).to have_key(:title)
    end
  end
end
