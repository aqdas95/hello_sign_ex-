# MIT License

# Copyright (c) 2024 Aqdas Malik

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

defmodule Hellosign.Client do
  use HTTPoison.Base
  alias Hellosign.{Config, FormDataConverter}

  def process_url(url), do: Config.api_url() <> url

  def process_response_body(body) do
    try do
      {status, res} = Jason.decode(body)

      case status do
        :ok ->
          {:ok, res}

        :error ->
          body
      end
    rescue
      _ ->
        body
    end
  end

  def handle_response(httpoison_response) do
    case httpoison_response do
      {:ok, %HTTPoison.Response{status_code: 200, body: {:ok, body}}} ->
        res =
          body
          |> Enum.map(fn {k, v} -> {String.to_atom(k), v} end)
          |> Map.new()
          |> AtomizeKeys.atomize_string_keys()

        {:ok, res}

      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        {:ok, body}

      {:ok, %HTTPoison.Response{body: {:ok, body}}} ->
        {:error, body}

      {:ok, %HTTPoison.Response{body: {:error, body}}} ->
        {:error, body}

      # html error responses
      {:ok, %HTTPoison.Response{status_code: status_code, body: body}} ->
        {:error, %{status_code: status_code, body: body}}

      {:error, %HTTPoison.Error{reason: reason}} ->
        {:error, reason}
    end
  end

  def request_headers(config, :json) do
    [
      basic(config),
      {"Content-type", "application/json"}
    ]
  end

  def request_headers(config, :form) do
    [
      basic(config),
      {"Content-Type", "multipart/form-data"}
    ]
  end

  def basic(config) do
    auth = Base.encode64("#{config.api_key() || Config.api_key()}:")
    {"Authorization", "Basic #{auth}"}
  end

  def api_post(url, {:form, params}, config) when is_map(params) do
    body =
      params
      |> AtomizeKeys.stringify_atom_keys()
      |> FormDataConverter.map_to_form_data()

    url
    |> post({:form, body}, request_headers(config, :form))
    |> handle_response()
  end
end
