require 'net/http'
require 'uri'
require 'json'

class WeathersController < ApplicationController

  def index
    @location = params[:location]
    @prefecture = params[:prefecture]
  end

  def create
    if params[:from_dt_month].to_i > params[:to_dt_month].to_i || ( params[:from_dt_month].to_i == params[:to_dt_month].to_i && params[:from_dt_day].to_i > params[:to_dt_day].to_i )
      redirect_to map_weathers_path(location: params[:location], prefecture: params[:prefecture]), flash: {alert:'入力に誤りがありました'}
      # binding.pry
    elsif
      # binding.pry
      from_dt = params[:from_dt_month] + "/" + params[:from_dt_day]
      to_dt = params[:to_dt_month] + "/" + params[:to_dt_day]
      uri = URI.parse("http://192.168.33.10:8000/")
      request = Net::HTTP::Post.new(uri)
      request.content_type = "application/json"
      request.body = JSON.dump({
        "city": params[:location],
        "from_dt": from_dt,
        "to_dt": to_dt,
        "sort_key": params[:sort_key]
      })
      req_options = {
        use_ssl: uri.scheme == "https",
      }
      response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
        http.request(request)
      end
      begin
        # responseの値に応じて処理を分ける
        case response
        # 成功した場合
        when Net::HTTPSuccess
          # responseのbody要素をJSON形式で解釈し、hashに変換
          result = JSON.parse(response.body)
          # 表示用の変数に結果を格納
          @header = result["header"]
          @record = result["record"]
          respond_to do |format|
            format.html
            format.json { render json: {header: @header, record: @record}}
          end
        # 別のURLに飛ばされた場合
        when Net::HTTPRedirection
          @message = "Redirection: code=#{response.code} message=#{response.message}"
        # その他エラー
        else
          @message = "HTTP ERROR: code=#{response.code} message=#{response.message}"
        end
      # エラー時処理
      rescue IOError => e
        @message = "e.message"
      rescue TimeoutError => e
        @message = "e.message"
      rescue JSON::ParserError => e
        @message = "e.message"
      rescue => e
        @message = "e.message"
      end
    end
  end
end
