class AddThumbToProjectImages < ActiveRecord::Migration
  def change
    add_column :project_images, :thumb, :boolean
  end
end
