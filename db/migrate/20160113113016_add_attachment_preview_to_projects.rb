class AddAttachmentPreviewToProjects < ActiveRecord::Migration
 	def change
		add_attachment :projects, :preview
	end
end
