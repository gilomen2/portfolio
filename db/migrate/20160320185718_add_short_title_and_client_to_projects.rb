class AddShortTitleAndClientToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :short_title, :string
    add_column :projects, :client, :string
  end
end
