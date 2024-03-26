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

defmodule Hellosign do
  @moduledoc """
  Provides API wrappers for Hellosign API
  See https://developers.hellosign.com/api/quickstart for further info on REST endpoints
  """

  alias Hellosign.{Config, Embedded}

  use Application

  def start(_type, _args) do
    children = [Config]
    opts = [strategy: :one_for_one, name: Hellosign.Supervisor]

    Supervisor.start_link(children, opts)
  end

  @spec create_embedded(Embedded.create_request(), Config.t()) :: {:ok, Embedded.create_response()} | {:error, map()}
  @doc """
  Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If
  form_fields_per_document is not specified, a signature page will be affixed where all signers will
  be required to add their signature, signifying their agreement to all contained documents. Note that
  embedded signature requests can only be signed in embedded iFrames whereas normal signature requests
  can only be signed on Dropbox Sign.

  See: https://developers.hellosign.com/api/reference/operation/signatureRequestCreateEmbedded/

  ## Example request
  ```elixir
      Hellosign.Embedded.create_request()
  ```

  ## Example response
  ```elixir
      Hellosign.Embedded.create_response()
  ```
  """
  defdelegate create_embedded(params, config \\ %Config{}), to: Embedded, as: :create
end
