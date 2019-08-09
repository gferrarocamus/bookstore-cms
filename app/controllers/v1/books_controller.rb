class V1::BooksController < ApplicationController
  def index
    @books = Book.all
    render json: @books
  end

  def create
  end

  def destroy
    Book.destroy(params[:id])
  end

  private

  def book_params
    params.require(:book).permit(:title, :description, :category)
  end
end
