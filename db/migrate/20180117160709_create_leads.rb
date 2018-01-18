class CreateLeads < ActiveRecord::Migration[5.1]
  def change
    create_table :leads do |t|
      t.string :title
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :phone
      t.string :phoneType
      t.string :state
      t.string :city
      t.string :insuranceCompany

      t.timestamps
    end
  end
end
