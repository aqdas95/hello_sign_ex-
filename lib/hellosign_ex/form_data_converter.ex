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

defmodule Hellosign.FormDataConverter do
  @doc """
  Converts a map to form data.
  """
  def map_to_form_data(map) do
    Enum.flat_map(map, &flatten_entry(&1))
  end

  defp flatten_entry({key, value}) when is_map(value) do
    map_to_form_data(value)
    |> Enum.map(fn {subkey, subvalue} -> {"#{key}[#{subkey}]", any_to_string(subvalue)} end)
  end

  defp flatten_entry({key, value}) when is_list(value) do
    Enum.with_index(value)
    |> Enum.flat_map(fn {subvalue, index} -> flatten_entry({"#{key}[#{index}]", subvalue}) end)
  end

  defp flatten_entry({key, value}) do
    [{key, any_to_string(value)}]
  end

  defp any_to_string(value) when is_binary(value) or is_number(value) do
    value
  end

  defp any_to_string(value) when is_boolean(value) do
    if value, do: "1", else: "0"
  end

  defp any_to_string(value) do
    raise ArgumentError, "Unsupported value type: #{inspect(value)}"
  end
end
