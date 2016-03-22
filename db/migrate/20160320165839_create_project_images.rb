class CreateProjectImages < ActiveRecord::Migration
  def change
    create_table :project_images do |t|
      t.string :alt
      t.string :uri
      t.references :project, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
