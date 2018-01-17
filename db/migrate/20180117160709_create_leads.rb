class CreateLeads < ActiveRecord::Migration[5.1]
  def change
    create_table :leads do |t|
      t.string :title
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :phone_type
      t.string :state
      t.string :city
      t.string :insurance_company

      t.timestamps
    end
  end
end
