module ProjectsHelper
	def project_params
		params.require(:project).permit(:projectname, :projectdescription, :projectdetails, :image, :preview)
	end
end
