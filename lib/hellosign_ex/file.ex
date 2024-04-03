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

defmodule Hellosign.File do
  alias Hellosign.{Client, Config}

  @base_url "/signature_request"

  @typedoc """
  The download file params type

  The fields are:
    * `file_type`            - Allows requester to specify the file type (see list of allowed types)
          Enum: "pdf" "zip"
          default: "pdf"

    * `force_download`       - Allows requester to specify wheather browser will download the file and save it locally.
        When set to 0 the file will be displayed in the browser. (see list of allowed types)

          Enum: 0 1
          default: 1
  """

  @type download_params :: %{
          optional(:file_type) => String.t(),
          optional(:force_download) => non_neg_integer()
        }

  @typedoc """
  The Download file path type

    A string representing the signature request id to download the file
  """
  @type download_path_type :: String.t()

  @typedoc """
  The Download file criteria type

    An atom representing the criteria to download the file
    Enum:
      :default     => This will return the binary of the requested file
      :file_url    => This will return the file url of the requested file
      :data_uri    => This will return the encode64 data_uri of the requested file
  """
  @type download_criteria :: atom()

  @type data_uri_response :: %{
          data_uri: String.t()
        }

  @type file_url_response :: %{
          expires_at: non_neg_integer,
          file_url: String.t()
        }

  @spec download(download_criteria(), download_path_type(), download_params(), Config.t()) ::
          {:ok, bitstring() | data_uri_response() | file_url_response()} | {:error, map()}
  def download(type, signature_request_id, params, config \\ %Config{}) do
    params = Map.to_list(params)

    case url_for(type, signature_request_id) do
      {:ok, url} -> Client.api_get(url, params, config)
      {:error, error} -> {:error, error}
    end
  end

  defp url_for(:default, signature_request_id),
    do: {:ok, @base_url <> "/files/" <> signature_request_id}

  defp url_for(:data_uri, signature_request_id),
    do: {:ok, @base_url <> "/files_as_data_uri/" <> signature_request_id}

  defp url_for(:file_url, signature_request_id),
    do: {:ok, @base_url <> "/files_as_file_url/" <> signature_request_id}

  defp url_for(_type, _signature_request_id), do: {:error, %{error: "Invalid type"}}
end
