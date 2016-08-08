class AuthorSessionsController < ApplicationController
	def new

	end

	def create
		if login(params[:email], params[:password])
			redirect_back_or_to root_path 
			flash[:notice] = "Logged In"
		else 
			flash.now.alert="Login Failed"
			render action :new
		end
	end

	def destroy
		logout
		redirect_to(:authors, notice: "Logged Out")
	end
end
