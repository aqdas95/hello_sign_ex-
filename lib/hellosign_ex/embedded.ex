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

defmodule Hellosign.Embedded do
  alias Hellosign.Types, as: T
  alias Hellosign.{Client, Config}

  @typedoc """
  The create request type

  The fields are:
    * `client_id` - Client id of the app you're using to create this embedded signature request.
        Used for security purposes.

    * `files`                        - Use files[] to indicate the uploaded file(s) to send for signature.
    * `file_urls`                    - Use file_urls[] to have Dropbox Sign download the file(s) to send for signature.
    * `signers`                      - Add Signers to your Signature Request.
    * `grouped_signers`              - Add Grouped Signers to your Signature Request.
    * `allow_decline`                - Allows signers to decline to sign a document if true. Defaults to false.
    * `allow_resign`                 - Allows signers to reassign their signature requests to other signers if set to true. Defaults to false.
    * `attachemnts`                  - A list describing the attachments
    * `cc_email_addresses`           - the cardinality of the association

    * `custom_fields`                - When used together with merge fields, custom_fields allows users to add pre-filled data to their signature requests.
        Pre-filled data can be used with "send-once" signature requests by adding merge fields with
        form_fields_per_document or Text Tags while passing values back with custom_fields together
        in one API call.

        For using pre-filled on repeatable signature requests, merge fields are added to templates in the
        Dropbox Sign UI or by calling /template/create_embedded_draft and then passing custom_fields on
        subsequent signature requests referencing that template.

    * `field_options`                - This allows the requester to specify field options for a signature request.
    * `form_field_groups`            - Group information for fields defined in form_fields_per_document.
        String-indexed JSON array with group_label and requirement keys. form_fields_per_document
        must contain fields referencing a group defined in form_field_groups.

    * `hide_text_tags`               - Enables automatic Text Tag removal when set to true.
        NOTE: Removing text tags this way can cause unwanted clipping. We recommend leaving this
        setting on false and instead hiding your text tags using white text or a similar approach.

    * `message`                      - The custom message in the email that will be sent to the signers. <= 5_000 characters

    * `metadata`                     - Key-value data that should be attached to the signature request.

        This metadata is included in all API responses and events involving the signature request.
        For example, use the metadata field to store a signer's order number for look up when
        receiving events for the signature request.

        Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names
        up to 40 characters long and values up to 1000 characters long.

    * `signing_options`              - This allows the requester to specify the types allowed for creating a signature.

        Note: If signing_options are not defined in the request, the allowed types will default to those
        specified in the account settings.

    * `subject`                      - The subject in the email that will be sent to the signers.
    * `test_mode`                    - Whether this is a test, the signature request will not be legally binding if set to true.
    * `title`                        - The title you want to assign to the SignatureRequest.
    * `use_text_tags`                - Send with a value of true if you wish to enable Text Tags parsing in your document.

    * `populate_auto_fill_fields`    - Controls whether auto fill fields can automatically populate a signer's information during signing.

        ⚠️ Note ⚠️: Keep your signer's information safe by ensuring that the signer on your signature
        request is the intended party before using this feature.

    * `expires_at`                   - When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable.
    * `form_field_rules`             - Conditional Logic rules for fields defined in form_fields_per_document

    * `form_fields_per_document`     - The fields that should appear on the document, expressed as an array of objects.
        (For more details you can read about it here: Using Form Fields per Document.)

        NOTE: Fields like text, dropdown, checkbox, radio, and hyperlink have additional
        required and optional parameters. Check out the list of additional parameters for
        these field types.

        - Text Field use SubFormFieldsPerDocumentText
        - Dropdown Field use SubFormFieldsPerDocumentDropdown
        - Hyperlink Field use SubFormFieldsPerDocumentHyperlink
        - Checkbox Field use SubFormFieldsPerDocumentCheckbox
        - Radio Field use SubFormFieldsPerDocumentRadio
        - Signature Field use SubFormFieldsPerDocumentSignature
        - Date Signed Field use SubFormFieldsPerDocumentDateSigned
        - Initials Field use SubFormFieldsPerDocumentInitials
        - Text Merge Field use SubFormFieldsPerDocumentTextMerge
        - Checkbox Merge Field use SubFormFieldsPerDocumentCheckboxMerge
  """

  @type create_request :: %{
          required(:client_id) => String.t(),
          optional(:files) => [binary()],
          optional(:file_urls) => [String.t()],
          optional(:signers) => [Signer.t()],
          optional(:grouped_signers) => [T.signer_group()],
          required(:allow_decline) => boolean(),
          required(:allow_resign) => boolean(),
          optional(:attachemnts) => [T.sub_attachment()],
          optional(:cc_email_addresses) => [String.t()],
          optional(:custom_fields) => [T.custom_field()],
          optional(:field_options) => [T.field_option()],
          optional(:form_field_groups) => [T.sub_form_field_group()],
          required(:hide_text_tags) => boolean(),
          optional(:message) => String.t(),
          optional(:metadata) => any(),
          required(:signing_options) => T.sub_signing_options(),
          optional(:subject) => String.t(),
          required(:test_mode) => boolean(),
          optional(:title) => String.t(),
          required(:use_text_tags) => boolean(),
          required(:populate_auto_fill_fields) => boolean(),
          optional(:expires_at) => non_neg_integer(),

          # TODO: Following need to be defined
          optional(:form_field_rules) => any(),
          optional(:form_fields_per_document) => any()
        }

  @type create_response :: %{
          signature_request: T.signature_request(),
          warnings: [T.warning()]
        }

  @spec create(create_request(), Config.t()) :: {:ok, create_response()} | {:error, map()}
  def create(params, config \\ %Config{}) do
    url = "/signature_request/create_embedded"

    params =
      params
      |> Map.put(:client_id, config.client_id() || Config.client_id())
      |> add_default_cc_mail(config.default_cc() || Config.default_cc())
      |> add_test_mode(config.test_mode() || Config.test_mode())
      |> prepare_create_params()

    Client.api_post(url, params, config)
  end

  @typedoc """
  The get sign url request type

    A string representing the signature id for the embedded url
  """
  @type get_sign_url_request :: String.t()

  @type get_sign_url_response :: %{
          embedded: %{
            sign_url: String.t(),
            expires_at: non_neg_integer()
          }
        }

  @spec get_sign_url(get_sign_url_request(), Config.t()) ::
          {:error, any()} | {:ok, get_sign_url_response()}
  def get_sign_url(signature_id, config \\ %Config{})

  def get_sign_url(signature_id, config) when is_binary(signature_id) do
    url = "/embedded/sign_url/#{signature_id}"

    Client.api_get(url, [], config)
  end

  def get_sign_url(_signature_id, _config),
    do: {:error, %{error: "Invalid signature id"}}

  defp prepare_create_params(%{files: files} = params) when not is_nil(files) and files != [],
    do: {:multipart, params}

  defp prepare_create_params(params), do: {:form, params}

  defp add_default_cc_mail(params, default_cc) do
    mails = Map.get(params, :cc_email_addresses, [])
    Map.put(params, :cc_email_addresses, mails ++ [default_cc])
  end

  defp add_test_mode(params, "true"), do: Map.put(params, :test_mode, "true")

  defp add_test_mode(params, "false"), do: params
end
