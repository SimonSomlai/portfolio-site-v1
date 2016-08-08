class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
    	t.string :projectname
    	t.string :projectdetails
    	t.text  :projectdescription
      t.timestamps null: false
    end
  end
end
