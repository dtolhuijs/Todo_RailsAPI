class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :edit, :update, :destroy]

  # GET /todos
  # GET /todos.json
  def index
    @todo = Todo.new
    @todos = Todo.all
  end

  # GET /todos/1
  # GET /todos/1.json
  def show
  end

end
