class Project < ActiveRecord::Base
	has_attached_file :image, styles: { medium: "300x300>", large: "1000x1000>" }
	validates_attachment_content_type :image, :content_type => ["image/jpg","image/jpeg","image/png","image/gif"] 
	has_attached_file :preview, styles: { medium: "1440x2560>"}
	validates_attachment_content_type :preview, :content_type => ["image/jpg", "image/png", "image/jpeg"]
end
