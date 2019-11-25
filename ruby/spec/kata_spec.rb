require_relative '../src/kata'

describe 'rspec' do |variable|
  it 'works' do
    expect(KataClass.describe_yourself).to eq('I am a kata')
  end
end