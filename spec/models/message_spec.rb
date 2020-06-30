require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#crete' do
    context "commentがあれば保存できること" do
      it "commentが存在する場合、保存できること" do
        expect(build(:message, image: nil)).to be_valid
      end

      it "imageがあれば保存できること" do
        expect(build(:message, comment: nil)).to be_valid
      end

      it "commentとimageがあれば保存できること" do
        expect(build(:message)).to be_valid
      end
    end

    context "messageを保存できない場合" do
      it "commentとimageがどちらも空の場合できないこと" do
        message = build(:message, comment: nil, image: nil)
        message.valid?
        expect(message.errors[:comment]).to include("を入力してください")
      end

      it "group_idがないと保存できないこと" do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end

      it "user_idがないと保存できない事" do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end