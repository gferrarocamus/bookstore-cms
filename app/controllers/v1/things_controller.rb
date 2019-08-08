class V1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      {
        :name => 'some-thing',
        :guid => 'some-thing-guid'
      }
    ]
  }.to_json
  end
end
