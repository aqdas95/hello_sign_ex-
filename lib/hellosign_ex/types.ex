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

defmodule Hellosign.Types do
  @moduledoc """
  Hellosign Types
  """

  @typedoc """
  Custom field type

  The fields are:
  * `name` - The name of a custom field. When working with pre-filled data,
      the custom field's name must have a matching merge field name or the
      field will remain empty on the document during signing.

  * `editor` - Used to create editable merge fields. When the value matches
      a role passed in with signers, that role can edit the data that was
      pre-filled to that field. This field is optional, but required when
      this custom field object is set to required = true.

      Note: Editable merge fields are only supported for single signer requests
      (or the first signer in ordered signature requests). If used when there
      are multiple signers in an unordered signature request, the editor value is
      ignored and the field won't be editable.

  * `required` - Used to set an editable merge field when working with pre-filled
      data. When true, the custom field must specify a signer role in editor.
      Default: false

  * `value` - The string that resolves (aka "pre-fills") to the merge field on the
      final document(s) used for signing.
  """
  @type custom_field :: %{
          required(:name) => String.t(),
          required(:editor) => String.t(),
          optional(:required) => boolean(),
          optional(:value) => String.t()
        }

  @typedoc """
  Field option type

  The fields are:
  * `value` - Allows requester to specify the date format (see list of allowed formats)
      Note: Only available for Premium and higher.
      Enum: "MM / DD / YYYY" "MM - DD - YYYY" "DD / MM / YYYY" "DD - MM - YYYY" "YYYY / MM / DD" "YYYY - MM - DD"
  """
  @type field_option :: %{
          required(:date_format) => String.t()
        }

  @typedoc """
  Signature Request type

  The fields are:
  * `test_mode` - Whether this is a test signature request. Test requests have no legal value. Defaults to false.
  * `signature_request_id` - The id of the SignatureRequest.
  * `requester_email_address` - The email address of the initiator of the SignatureRequest.
  * `title` - The title the specified Account uses for the SignatureRequest.
  * `original_title` - Default Label for account.
  * `subject` - The subject in the email that was initially sent to the signers.
  * `message` - The custom message in the email that was initially sent to the signers.
  * `metadata` - The metadata attached to the signature request.
  * `created_at` - Time the signature request was created.
  * `expires_at` - The time when the signature request will expire unsigned signatures.
  * `is_complete` - Whether or not the SignatureRequest has been fully executed by all signers.
  * `is_declined` - Whether or not the SignatureRequest has been declined by a signer.
  * `has_error` - Whether or not an error occurred (either during the creation of the SignatureRequest or during one of the signings).
  * `files_url` - The URL where a copy of the request's documents can be downloaded.
  * `signing_url` - The URL where a signer, after authenticating, can sign the documents.
      This should only be used by users with existing Dropbox Sign accounts as they will be required to log in before signing.
  * `details_url` - The URL where the requester and the signers can view the current status of the SignatureRequest.
  * `cc_email_addresses` - A list of email addresses that were CCed on the SignatureRequest. They will receive a copy of the final PDF once all the signers have signed.
  * `signing_redirect_url` - The URL you want the signer redirected to after they successfully sign.
  * `template_ids` - Templates IDs used in this SignatureRequest (if any).
  * `custom_fields` - An array of Custom Field objects containing the name and type of each custom field.
      - Text Field uses SignatureRequestResponseCustomFieldText
      - Checkbox Field uses SignatureRequestResponseCustomFieldCheckbox
  * `attachments` - Signer attachments.
  * `response_data` - An array of form field objects containing the name, value, and type of each textbox or checkmark field filled in by the signers.
  * `signatures` - An array of signature objects, 1 for each signer.
  """
  @type signature_request :: %{
          required(:test_mode) => boolean(),
          required(:signature_request_id) => String.t(),
          required(:requester_email_address) => String.t(),
          required(:title) => String.t(),
          required(:original_title) => String.t(),
          optional(:subject) => String.t(),
          optional(:message) => String.t(),
          optional(:metadata) => map(),
          required(:created_at) => String.t(),
          required(:expires_at) => String.t(),
          required(:is_complete) => boolean(),
          required(:is_declined) => boolean(),
          required(:has_error) => boolean(),
          required(:files_url) => [String.t()],
          required(:signing_url) => String.t(),
          required(:details_url) => String.t(),
          optional(:cc_email_addresses) => [String.t()],
          optional(:signing_redirect_url) => String.t(),
          optional(:template_ids) => [String.t()],
          optional(:custom_fields) => [custom_field()],

          # TODO: Define type => https://developers.hellosign.com/api/reference/operation/signatureRequestGet/#!c=200&path=signature_request/attachments&t=response
          optional(:attachments) => [map()],

          # TODO: Define type => https://developers.hellosign.com/api/reference/operation/signatureRequestGet/#!c=200&path=signature_request/response_data&t=response
          optional(:response_data) => [map()],
          optional(:signatures) => [signature()]
        }

  @typedoc """
  Signature type

  The fields are:
  * `signature_id` - Signature identifier.
  * `signer_group_guid` - Signer Group GUID
  * `signer_email_address` - The email address of the signer.
  * `signer_name` - The name of the signer.
  * `signer_role` - The role of the signer.
  * `order` - If signer order is assigned this is the 0-based index for this signer.
  * `status_code` - The current status of the signature. eg: awaiting_signature, signed, declined.
  * `decline_reason` - The reason provided by the signer for declining the request.
  * `signed_at` - Time that the document was signed or null.
  * `last_viewed_at` - The time that the document was last viewed by this signer or null.
  * `last_reminded_at` - The time the last reminder email was sent to the signer or null.
  * `has_pin` - Boolean to indicate whether this signature requires a PIN to access.
  * `has_sms_auth` - Boolean to indicate whether this signature has SMS authentication enabled.
  * `has_sms_delivery` - Boolean to indicate whether this signature has SMS delivery enabled.
  * `sms_phone_number` - The SMS phone number used for authentication or signature request delivery.
  * `reassigned_by` - Email address of original signer who reassigned to this signer.
  * `reassignment_reason` - Reason provided by original signer who reassigned to this signer.
  * `reassigned_from` - Previous signature identifier.
  * `error` - Error message pertaining to this signer, or null.
  """
  @type signature :: %{
          required(:signature_id) => String.t(),
          optional(:signer_group_guid) => String.t(),
          required(:signer_email_address) => String.t(),
          required(:signer_name) => String.t(),
          optional(:signer_role) => String.t(),
          optional(:order) => non_neg_integer(),
          required(:status_code) => String.t(),
          optional(:decline_reason) => String.t(),
          optional(:signed_at) => non_neg_integer(),
          optional(:last_viewed_at) => non_neg_integer(),
          optional(:last_reminded_at) => non_neg_integer(),
          required(:has_pin) => boolean(),
          optional(:has_sms_auth) => boolean(),
          optional(:has_sms_delivery) => boolean(),
          optional(:sms_phone_number) => String.t(),
          optional(:reassigned_by) => String.t(),
          optional(:reassignment_reason) => String.t(),
          optional(:reassigned_from) => String.t(),
          optional(:error) => String.t()
        }

  @typedoc """
  Signer type

  The fields are:
  * `email_address` - The email address of the signer.
  * `name` - The name of the signer.
  * `order` - The order the signer is required to sign in.
  * `pin` - The 4- to 12-character access code that will secure this signer's signature page.

  * `sms_phone_number` - An E.164 formatted phone number.
      Note: Not available in test mode and requires a Standard plan or higher

  * `sms_phone_number_type` - Specifies the feature used with the sms_phone_number. Default authentication.
      If authentication, signer is sent a verification code via SMS that is required to access the document.
      If delivery, a link to complete the signature request is delivered via SMS (and email).
      Enum: "authentication" "delivery"
  """
  @type signer :: %{
          required(:email_address) => String.t(),
          required(:name) => String.t(),
          optional(:order) => non_neg_integer(),
          optional(:pin) => non_neg_integer(),
          optional(:sms_phone_number) => String.t(),
          optional(:sms_phone_number_type) => String.t()
        }

  @typedoc """
  Signer Group type

  The fields are:
  * `group` - The name of the group.

  * `signers` - Signers belonging to this Group.
      NOTE: Only name, email_address, and pin are available to
      Grouped Signers. We will ignore all other properties, even
      though they are listed below.

  * `order` - The order the group is required to sign in. Use this
      instead of Signer-level order.
  """

  @type signer_group :: %{
          required(:group) => String.t(),
          required(:signers) => [Signer.t()],
          optional(:order) => non_neg_integer()
        }

  @typedoc """
  Sub Attachment type

  The fields are:
  * `name` - The name of attachment.

  * `signer_index` - The signer's index in the signers parameter (0-based indexing).
      NOTE: Only one signer can be assigned per attachment.

  * `instructions` - The instructions for uploading the attachment.
  * `required` - Determines if the attachment must be uploaded. Default false
  """

  @type sub_attachment :: %{
          required(:name) => String.t(),
          required(:signer_index) => non_neg_integer(),
          optional(:instructions) => String.t(),
          optional(:required) => boolean()
        }

  @typedoc """
  Sub Form Field Group type

  The fields are:
  * `group_id` - ID of group. Use this to reference a specific group from the group
      value in form_fields_per_document.

  * `group_label` - Name of group.

  * `requirement` - Examples: require_0-1 require_1 require_1-ormore
      - Check out the list of acceptable requirement checkbox type values.
      - Check out the list of acceptable requirement radio type fields.
      - Radio groups require at least two fields per group.
  """

  @type sub_form_field_group :: %{
          required(:group_id) => String.t(),
          required(:group_label) => String.t(),
          required(:requirement) => String.t()
        }

  @typedoc """
  Sub Form Field Rule type

  The fields are:
  * `id` - ID of group. Must be unique across all defined rules.
  * `trigger_operator` - Currently only AND is supported. Support for OR is being worked on.
  """

  @type sub_form_field_rule :: %{
          required(:id) => String.t(),
          required(:trigger_operator) => String.t()
        }

  @typedoc """
  Sub Form Field Rule type

  The fields are:
  * `default` - The default type shown (limited to the listed types)
      Enum: "draw" "phone" "type" "upload"

  * `draw` - Allows drawing the signature
  * `phone` - Allows using a smartphone to email the signature
  * `type` - Allows typing the signature
  * `upload` - Allows uploading the signature
  """

  @type sub_signing_options :: %{
          required(:default) => String.t(),
          optional(:draw) => boolean(),
          optional(:phone) => boolean(),
          optional(:type) => boolean(),
          optional(:upload) => boolean()
        }

  @typedoc """
  Warning type

  The fields are:
  * `warning_msg` - Warning message
  * `warning_name` - Warning name
  """

  @type warning :: %{
          required(:warning_msg) => String.t(),
          required(:warning_name) => String.t()
        }
end
